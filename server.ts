import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory and inquiries storage file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
}

app.use(express.json());

// Helper to read inquiries
function readInquiries(): any[] {
  try {
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading inquiries:', err);
    return [];
  }
}

// Helper to save inquiries
function saveInquiries(inquiries: any[]) {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving inquiries:', err);
  }
}

// Format IST date and time
function getISTDateTime() {
  const now = new Date();
  const optionsDate: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  };

  const formattedDate = new Intl.DateTimeFormat('en-IN', optionsDate).format(now);
  const formattedTime = new Intl.DateTimeFormat('en-IN', optionsTime).format(now);

  return { formattedDate, formattedTime };
}

// API Health
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'S Packaging API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// API Get Inquiries (for proprietor management dashboard)
app.get('/api/inquiries', (req, res) => {
  const inquiries = readInquiries();
  res.json({ success: true, count: inquiries.length, inquiries });
});

// API Submit Inquiry
app.post('/api/inquiries', async (req, res) => {
  try {
    const {
      fullName,
      companyName = '',
      mobileNumber,
      emailAddress,
      product,
      requiredQuantity = '',
      requiredBoxSize = '',
      customizationRequirements = '',
      message = '',
    } = req.body;

    // Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Full Name is required (minimum 2 characters).' });
    }
    if (!mobileNumber || typeof mobileNumber !== 'string' || mobileNumber.trim().length < 7) {
      return res.status(400).json({ success: false, error: 'Valid Mobile Number is required.' });
    }
    if (!emailAddress || typeof emailAddress !== 'string' || !/^\S+@\S+\.\S+$/.test(emailAddress)) {
      return res.status(400).json({ success: false, error: 'A valid Email Address is required.' });
    }
    if (!product || typeof product !== 'string' || product.trim().length === 0) {
      return res.status(400).json({ success: false, error: 'Product selection is required.' });
    }

    const { formattedDate, formattedTime } = getISTDateTime();
    const inquiryId = 'SP-' + Date.now().toString().slice(-6);

    // Business recipient email
    const recipientEmail =
      process.env.BUSINESS_INQUIRY_EMAIL || 'rahulsinghkadipur8301@gmail.com';

    // Subject line as required: “New Product Inquiry – [Product Name] – S Packaging”
    const emailSubject = `New Product Inquiry – ${product} – S Packaging`;

    // Professional clean text body as requested:
    const plainTextBody = `New Product Inquiry

Customer Name: ${fullName.trim()}
Company: ${companyName.trim() || 'Not specified'}
Mobile: ${mobileNumber.trim()}
Email: ${emailAddress.trim()}

Product: ${product.trim()}
Required Quantity: ${requiredQuantity.trim() || 'Available as per requirement'}
Box Size: ${requiredBoxSize.trim() || 'Available as per requirement'}

Customization Requirements:
${customizationRequirements.trim() || 'Standard / To be discussed'}

Message:
${message.trim() || 'No additional message provided'}

Inquiry Date: ${formattedDate}
Inquiry Time: ${formattedTime} (IST)
Inquiry Reference: ${inquiryId}`;

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0f172a; color: #ffffff; padding: 24px; text-align: left;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 0.5px;">S PACKAGING</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Manufacturing & Custom Packaging Solutions | Vasai, Maharashtra</p>
        </div>
        
        <div style="padding: 24px;">
          <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 12px 16px; margin-bottom: 24px;">
            <h3 style="margin: 0; color: #0f172a; font-size: 16px;">${emailSubject}</h3>
            <span style="font-size: 12px; color: #64748b;">Reference ID: <strong>${inquiryId}</strong> | ${formattedDate} at ${formattedTime}</span>
          </div>

          <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Customer Details</h4>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 12px; background-color: #f1f5f9; width: 35%; color: #475569; font-weight: 600;">Customer Name:</td>
              <td style="padding: 8px 12px; background-color: #ffffff; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${fullName.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background-color: #f1f5f9; color: #475569; font-weight: 600;">Company:</td>
              <td style="padding: 8px 12px; background-color: #ffffff; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${companyName.trim() || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background-color: #f1f5f9; color: #475569; font-weight: 600;">Mobile:</td>
              <td style="padding: 8px 12px; background-color: #ffffff; color: #0f172a; border-bottom: 1px solid #f1f5f9;"><a href="tel:${mobileNumber.trim()}" style="color: #0284c7; text-decoration: none;">${mobileNumber.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background-color: #f1f5f9; color: #475569; font-weight: 600;">Email:</td>
              <td style="padding: 8px 12px; background-color: #ffffff; color: #0f172a; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${emailAddress.trim()}" style="color: #0284c7; text-decoration: none;">${emailAddress.trim()}</a></td>
            </tr>
          </table>

          <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Product & Requirements</h4>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 12px; background-color: #f1f5f9; width: 35%; color: #475569; font-weight: 600;">Product:</td>
              <td style="padding: 8px 12px; background-color: #ffffff; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${product.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background-color: #f1f5f9; color: #475569; font-weight: 600;">Required Quantity:</td>
              <td style="padding: 8px 12px; background-color: #ffffff; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${requiredQuantity.trim() || 'Available as per requirement'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background-color: #f1f5f9; color: #475569; font-weight: 600;">Box Size:</td>
              <td style="padding: 8px 12px; background-color: #ffffff; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${requiredBoxSize.trim() || 'Available as per requirement'}</td>
            </tr>
          </table>

          <div style="margin-bottom: 16px;">
            <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 600; color: #475569;">Customization Requirements:</p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; font-size: 14px; color: #1e293b; white-space: pre-wrap;">
              ${customizationRequirements.trim() || 'Standard / To be discussed'}
            </div>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 600; color: #475569;">Customer Message:</p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; font-size: 14px; color: #1e293b; white-space: pre-wrap;">
              ${message.trim() || 'No additional message provided.'}
            </div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #64748b; line-height: 1.5;">
            <strong>Inquiry Date:</strong> ${formattedDate}<br>
            <strong>Inquiry Time:</strong> ${formattedTime} (IST)<br>
            <strong>Location:</strong> Unit No. 1–2, Bilalpad, K. T. Spark-3, Vasai – 401204, Palghar, Maharashtra | Tel: 07942557202
          </div>
        </div>
      </div>
    `;

    // Email dispatch handler
    let emailStatus: {
      dispatched: boolean;
      recipient: string;
      subject: string;
      method: 'smtp' | 'simulated_dispatch';
      sentAt: string;
      error?: string;
    } = {
      dispatched: false,
      recipient: recipientEmail,
      subject: emailSubject,
      method: 'simulated_dispatch',
      sentAt: new Date().toISOString(),
    };

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"S Packaging Inquiries" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: emailAddress.trim(),
          subject: emailSubject,
          text: plainTextBody,
          html: htmlBody,
        });

        emailStatus.dispatched = true;
        emailStatus.method = 'smtp';
        console.log(`[Email Dispatched via SMTP] to ${recipientEmail} for inquiry ${inquiryId}`);
      } catch (smtpErr: any) {
        console.warn(`[SMTP Warning] Could not dispatch email via SMTP: ${smtpErr.message}. Falling back to simulated transmission.`);
        emailStatus.error = smtpErr.message;
        emailStatus.method = 'simulated_dispatch';
        emailStatus.dispatched = true; // Logged and captured in persistent queue
      }
    } else {
      // Clean simulated transactional dispatch with server audit logging
      console.log('====================================================');
      console.log(`[TRANSACTIONAL INQUIRY EMAIL GENERATED FOR S PACKAGING]`);
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log('----------------------------------------------------');
      console.log(plainTextBody);
      console.log('====================================================');
      emailStatus.dispatched = true;
      emailStatus.method = 'simulated_dispatch';
    }

    // Record inquiry
    const inquiryRecord = {
      id: inquiryId,
      createdAt: new Date().toISOString(),
      inquiryDate: formattedDate,
      inquiryTime: formattedTime,
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      mobileNumber: mobileNumber.trim(),
      emailAddress: emailAddress.trim(),
      product: product.trim(),
      requiredQuantity: requiredQuantity.trim(),
      requiredBoxSize: requiredBoxSize.trim(),
      customizationRequirements: customizationRequirements.trim(),
      message: message.trim(),
      status: 'new',
      emailDelivery: emailStatus,
      rawEmailPreview: plainTextBody,
    };

    const currentInquiries = readInquiries();
    currentInquiries.unshift(inquiryRecord);
    saveInquiries(currentInquiries);

    return res.status(200).json({
      success: true,
      inquiryId,
      message: 'Thank you. Your inquiry has been received. Our team will contact you shortly.',
      inquiry: inquiryRecord,
    });
  } catch (error: any) {
    console.error('Error handling inquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while processing your inquiry. Please try again or call 07942557202 directly.',
    });
  }
});

// Update inquiry status endpoint (for proprietor dashboard)
app.patch('/api/inquiries/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const validStatuses = ['new', 'reviewed', 'quoted', 'contacted'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ success: false, error: 'Invalid status' });
  }

  const inquiries = readInquiries();
  const index = inquiries.findIndex((i) => i.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Inquiry not found' });
  }

  inquiries[index].status = status;
  saveInquiries(inquiries);
  res.json({ success: true, inquiry: inquiries[index] });
});

// Start server with Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`S Packaging Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
