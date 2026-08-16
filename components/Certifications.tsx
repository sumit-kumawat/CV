import React, { useState } from 'react';
import Section from './Section';
import { certifications } from '../constants';
import { Award, CheckCircle2, Calendar } from 'lucide-react';

const CertBadgeImage: React.FC<{ src?: string; alt: string }> = ({ src, alt }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <Award className="w-6 h-6 text-primary" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain"
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications & Credentials" className="bg-neutral-50/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* Intro text - Centered */}
        <div className="text-center">
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed">
            Industry-accredited professional credentials in ethical hacking, cloud architecture, application security, and cyber hygiene.
          </p>
        </div>

        {/* 4 in 1 Row Grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full p-5 sm:p-6 overflow-hidden"
            >
              {/* Subtle Top Accent Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Header Icon & Domain */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 p-2 bg-neutral-50 rounded-xl shadow-xs border border-neutral-200/80 flex items-center justify-center group-hover:scale-105 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-300 shrink-0">
                    <CertBadgeImage src={cert.badgeUrl} alt={cert.issuer} />
                  </div>
                  
                  {cert.domain && (
                    <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-[11px] font-semibold rounded-md border border-neutral-200 truncate max-w-[150px]">
                      {cert.domain}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
                  {cert.title}
                </h3>
                
                {/* Issuer */}
                <p className="text-neutral-600 font-medium text-xs sm:text-sm mb-4">
                  {cert.issuer}
                </p>
              </div>

              {/* Footer with Verification Status */}
              <div className="pt-3.5 mt-auto border-t border-neutral-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-neutral-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Issued: <strong className="text-neutral-700 font-semibold">{cert.year}</strong></span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Certifications;
