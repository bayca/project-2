import React, { useState } from 'react';
import { Handshake, Building2, Store, Send, ChevronDown } from 'lucide-react';

type PartnershipType = 'marine' | 'reseller' | null;

const Partnership: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [partnershipType, setPartnershipType] = useState<PartnershipType>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    country: '',
    experience: '',
    message: '',
    marketRegion: '',
    businessType: '',
    existingBrands: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { type: partnershipType, ...formData });
    alert('İlginiz için teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.');
    setShowForm(false);
    setPartnershipType(null);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      website: '',
      country: '',
      experience: '',
      message: '',
      marketRegion: '',
      businessType: '',
      existingBrands: '',
    });
  };

  return (
    <section id="partnership" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            DenizKoruma İş Ortaklığı
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Güvenilir iş ortaklarımız ağına katılın ve deniz izleme sektörünü birlikte dönüştürelim.
            Aşağıdan size uygun ortaklık türünü seçin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div 
            className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => {
              setShowForm(true);
              setPartnershipType('marine');
            }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg mr-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Denizcilik Ortağı</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Sertifikalı denizcilik teknisyenleri ve montajcıları ağımıza katılın. Özel
              eğitim, destek ve iş fırsatlarına erişin.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-slate-600">
                <ChevronDown className="h-5 w-5 text-cyan-500 mr-2" />
                Sertifikalı montaj ortağı statüsü
              </li>
              <li className="flex items-center text-slate-600">
                <ChevronDown className="h-5 w-5 text-cyan-500 mr-2" />
                Teknik eğitim ve destek
              </li>
              <li className="flex items-center text-slate-600">
                <ChevronDown className="h-5 w-5 text-cyan-500 mr-2" />
                Öncelikli müşteri yönlendirmeleri
              </li>
            </ul>
          </div>

          <div 
            className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => {
              setShowForm(true);
              setPartnershipType('reseller');
            }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-50 rounded-lg mr-4">
                <Store className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Bayi Ortağı</h3>
            </div>
            <p className="text-slate-600 mb-4">
              DenizKoruma ürünlerinin yetkili bayisi olun. Denizcilik işinizi
              son teknoloji izleme çözümlerimizle genişletin.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-slate-600">
                <ChevronDown className="h-5 w-5 text-cyan-500 mr-2" />
                Rekabetçi bayi marjları
              </li>
              <li className="flex items-center text-slate-600">
                <ChevronDown className="h-5 w-5 text-cyan-500 mr-2" />
                Pazarlama ve satış desteği
              </li>
              <li className="flex items-center text-slate-600">
                <ChevronDown className="h-5 w-5 text-cyan-500 mr-2" />
                Özel hesap yöneticisi
              </li>
            </ul>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-xl p-4 sm:p-8 w-full max-w-2xl my-4">
              <div className="flex items-start sm:items-center justify-between mb-6">
                <div className="flex items-start sm:items-center">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3 hidden sm:block">
                    {partnershipType === 'marine' ? (
                      <Building2 className="h-6 w-6 text-blue-600" />
                    ) : (
                      <Store className="h-6 w-6 text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                    {partnershipType === 'marine' ? 'Denizcilik Ortağı Başvurusu' : 'Bayi Başvurusu'}
                  </h3>
                </div>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-slate-400 hover:text-slate-600 p-2"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-slate-700 mb-1">
                      İletişim Kişisi
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      E-posta Adresi
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">
                      Web Sitesi
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                      Ülke
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {partnershipType === 'marine' ? (
                    <>
                      <div className="col-span-2">
                        <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-1">
                          Denizcilik Sektöründeki Tecrübe (Yıl)
                        </label>
                        <input
                          type="number"
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label htmlFor="marketRegion" className="block text-sm font-medium text-slate-700 mb-1">
                          Pazar Bölgesi
                        </label>
                        <input
                          type="text"
                          id="marketRegion"
                          name="marketRegion"
                          value={formData.marketRegion}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-1">
                          İşletme Türü
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          required
                        >
                          <option value="">İşletme türü seçin</option>
                          <option value="Marine Dealer">Deniz Araçları Bayisi</option>
                          <option value="Marine Equipment Store">Denizcilik Ekipmanları Mağazası</option>
                          <option value="Online Retailer">Online Satıcı</option>
                          <option value="Service Center">Servis Merkezi</option>
                          <option value="Other">Diğer</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Ek Bilgiler
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="w-full sm:w-auto px-6 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg flex items-center justify-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Başvuruyu Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partnership;