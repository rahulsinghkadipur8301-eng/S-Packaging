import React, { useState, useEffect } from 'react';
import { InquiryRecord } from '../types';
import { X, Inbox, RefreshCw, Mail, Phone, CheckCircle2, Clock, Eye, AlertCircle, Building, Package } from 'lucide-react';

interface ProprietorInquiryViewerProps {
  isOpen: boolean;
  onClose: () => void;
  onInquiryCountChange?: (count: number) => void;
}

export const ProprietorInquiryViewer: React.FC<ProprietorInquiryViewerProps> = ({
  isOpen,
  onClose,
  onInquiryCountChange,
}) => {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      if (data.success && Array.isArray(data.inquiries)) {
        setInquiries(data.inquiries);
        if (onInquiryCountChange) {
          onInquiryCountChange(data.inquiries.length);
        }
      } else {
        setError('Failed to load inquiries list.');
      }
    } catch (err: any) {
      console.error(err);
      setError('Could not connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  const updateStatus = async (id: string, status: InquiryRecord['status']) => {
    try {
      const res = await fetch(`/api/inquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status } : item))
        );
        if (selectedInquiry?.id === id) {
          setSelectedInquiry((prev) => (prev ? { ...prev, status } : null));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="inquiry-viewer-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                Inquiry Dispatch & Customer Log
              </h2>
              <p className="text-xs text-slate-300">
                S Packaging • Real-time Inquiries Received via Website
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Refresh Inquiries"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Layout: Inquiries Table + Preview Details */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* List Column */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Received Inquiries ({inquiries.length})
              </span>
              <span className="text-[11px] text-slate-400">
                Connected to proprietor mail system
              </span>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-md flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            {inquiries.length === 0 && !loading && (
              <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 p-6 text-slate-500 text-xs">
                No inquiries received yet. Submit a test inquiry through the website.
              </div>
            )}

            <div className="space-y-2.5 max-h-[550px] overflow-y-auto pr-1">
              {inquiries.map((inq) => {
                const isSelected = selectedInquiry?.id === inq.id;
                return (
                  <div
                    key={inq.id}
                    onClick={() => setSelectedInquiry(inq)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50/40 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">
                        {inq.fullName}
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {inq.id}
                      </span>
                    </div>

                    <div className="text-xs text-amber-800 font-semibold mb-1 truncate">
                      {inq.product}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                      <span>{inq.inquiryDate} • {inq.inquiryTime}</span>
                      <span
                        className={`capitalize px-2 py-0.5 rounded font-medium text-[10px] ${
                          inq.status === 'new'
                            ? 'bg-amber-100 text-amber-800'
                            : inq.status === 'contacted'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-sky-100 text-sky-800'
                        }`}
                      >
                        {inq.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-4">
            {selectedInquiry ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      Inquiry Details
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {selectedInquiry.fullName}
                    </h3>
                    {selectedInquiry.companyName && (
                      <p className="text-xs text-slate-500 font-medium">
                        {selectedInquiry.companyName}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {selectedInquiry.id}
                    </span>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {selectedInquiry.inquiryDate} {selectedInquiry.inquiryTime}
                    </div>
                  </div>
                </div>

                {/* Quick Actions to Call or Email */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${selectedInquiry.mobileNumber}`}
                    className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-3 rounded-md text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: {selectedInquiry.mobileNumber}</span>
                  </a>

                  <a
                    href={`mailto:${selectedInquiry.emailAddress}?subject=Regarding your S Packaging Inquiry for ${encodeURIComponent(
                      selectedInquiry.product
                    )}`}
                    className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-3 rounded-md text-xs transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Customer</span>
                  </a>
                </div>

                {/* Requirements Data Table */}
                <div className="bg-white rounded-lg border border-slate-200 p-3 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Selected Product:</span>
                    <span className="font-bold text-slate-900">{selectedInquiry.product}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Required Quantity:</span>
                    <span className="text-slate-800">
                      {selectedInquiry.requiredQuantity || 'Available as per requirement'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Box Dimensions:</span>
                    <span className="text-slate-800">
                      {selectedInquiry.requiredBoxSize || 'Available as per requirement'}
                    </span>
                  </div>
                  <div className="py-1">
                    <span className="text-slate-500 block mb-0.5">Customization:</span>
                    <p className="text-slate-800 bg-slate-50 p-2 rounded border border-slate-150">
                      {selectedInquiry.customizationRequirements || 'Standard / None'}
                    </p>
                  </div>
                  {selectedInquiry.message && (
                    <div className="py-1">
                      <span className="text-slate-500 block mb-0.5">Customer Message:</span>
                      <p className="text-slate-800 bg-slate-50 p-2 rounded border border-slate-150">
                        {selectedInquiry.message}
                      </p>
                    </div>
                  )}
                </div>

                {/* Email Delivery Audit Record */}
                <div className="bg-white rounded-lg border border-slate-200 p-3 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <Mail className="w-3.5 h-3.5 text-sky-600" />
                    <span>Proprietor Email Notification Status</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Subject: <code>{selectedInquiry.emailDelivery?.subject}</code>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Recipient: <code>{selectedInquiry.emailDelivery?.recipient}</code>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-medium pt-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Formatted and delivered to business email queue</span>
                  </div>
                </div>

                {/* Status Toggle */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="text-xs font-semibold text-slate-700">Update Status:</span>
                  <div className="flex items-center gap-1">
                    {(['new', 'reviewed', 'quoted', 'contacted'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => updateStatus(selectedInquiry.id, st)}
                        className={`text-[11px] px-2 py-1 rounded capitalize transition-colors ${
                          selectedInquiry.status === st
                            ? 'bg-amber-600 text-white font-semibold'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-24 text-slate-400 text-xs">
                Select an inquiry from the list to preview details, dispatch logs, and quick contact buttons.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
