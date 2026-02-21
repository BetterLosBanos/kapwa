import React from 'react';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import { Button } from '@kapwa/button';
import { Phone, Mail, Award, Building, Globe } from 'lucide-react';

type ContactInfo = {
  office: string;
  phone: string;
  email: string;
  website: string;
};

type Education = {
  degree: string;
  institution: string;
  year: string;
};

type BiographyProfile = {
  name: string;
  position: string;
  servingSince: string;
  profileImage: string;
  bannerImage: string;
  contactInfo: ContactInfo;
  education: Education[];
  biography: string[];
  achievements: string[];
};

type BiographySectionProps = {
  headerTitle: string;
  headerSubtitle?: string;
  profile: BiographyProfile;
  contactButtonText?: string;
  websiteButtonText?: string;
};

const BiographySection: React.FC<BiographySectionProps> = ({
  headerTitle,
  headerSubtitle,
  profile,
  contactButtonText = 'Contact Office',
  websiteButtonText = 'Visit Website',
}: BiographySectionProps) => {
  return (
    <Card>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{headerTitle}</h2>
        {headerSubtitle && <p className='text-gray-800'>{headerSubtitle}</p>}
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-xl shadow-xs overflow-hidden'>
              {/* Header Section */}
              <div className='relative h-64 bg-primary-700'>
                <div className='absolute inset-0'>
                  <img
                    src={profile.bannerImage}
                    alt='Office'
                    className='w-full h-full object-cover opacity-20'
                  />
                </div>
                <div className='absolute inset-0 bg-linear-to-b from-primary-900/50 to-primary-900/90' />
                <div className='relative h-full container mx-auto px-6 flex items-center'>
                  <div className='flex items-center space-x-8'>
                    <img
                      src={profile.profileImage}
                      alt={profile.name}
                      className='w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover'
                    />
                    <div className='text-white'>
                      <div className='text-sm font-medium text-primary-200 mb-1'>
                        {profile.position}
                      </div>
                      <h1 className='text-4xl font-bold mb-2'>
                        {profile.name}
                      </h1>
                      <p className='text-primary-100'>{profile.servingSince}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className='container mx-auto px-6 py-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                  {/* Left Column - Contact & Basic Info */}
                  <div className='space-y-6'>
                    <div className='bg-gray-50 rounded-lg p-6'>
                      <h3 className='text-lg font-semibold mb-4'>
                        Contact Information
                      </h3>
                      <div className='space-y-4'>
                        <div className='flex items-center text-gray-800'>
                          <Building className='h-5 w-5 mr-3 text-primary-600' />
                          <div>
                            <div className='font-medium'>Office</div>
                            <div className='text-sm'>
                              {profile.contactInfo.office}
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center text-gray-800'>
                          <Phone className='h-5 w-5 mr-3 text-primary-600' />
                          <div>
                            <div className='font-medium'>Phone</div>
                            <div className='text-sm'>
                              {profile.contactInfo.phone}
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center text-gray-800'>
                          <Mail className='h-5 w-5 mr-3 text-primary-600' />
                          <div>
                            <div className='font-medium'>Email</div>
                            <div className='text-sm'>
                              {profile.contactInfo.email}
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center text-gray-800'>
                          <Globe className='h-5 w-5 mr-3 text-primary-600' />
                          <div>
                            <div className='font-medium'>Website</div>
                            <div className='text-sm'>
                              {profile.contactInfo.website}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='bg-gray-50 rounded-lg p-6'>
                      <h3 className='text-lg font-semibold mb-4'>Education</h3>
                      <div className='space-y-4'>
                        {profile.education.map((edu, index) => (
                          <div
                            key={index}
                            className='border-l-2 border-primary-500 pl-4'
                          >
                            <div className='font-medium'>{edu.degree}</div>
                            <div className='text-sm text-gray-800'>
                              {edu.institution}
                            </div>
                            <div className='text-sm text-gray-800'>
                              {edu.year}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Bio & Achievements */}
                  <div className='lg:col-span-2 space-y-6'>
                    <div>
                      <h3 className='text-xl font-semibold mb-4'>Biography</h3>
                      <div className='prose max-w-none'>
                        {profile.biography.map((paragraph, index) => (
                          <p
                            key={index}
                            className='text-gray-800 leading-relaxed mt-4 first:mt-0'
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className='text-xl font-semibold mb-4'>
                        Key Achievements
                      </h3>
                      <div className='grid gap-4'>
                        {profile.achievements.map((achievement, index) => (
                          <div key={index} className='flex items-start'>
                            <Award className='h-5 w-5 text-primary-600 mt-1 mr-3 shrink-0' />
                            <p className='text-gray-800'>{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className='flex space-x-4 mt-8'>
                      <Button className='bg-primary-600 hover:bg-primary-700 text-white'>
                        <Mail className='h-4 w-4 mr-2' />
                        {contactButtonText}
                      </Button>
                      <Button
                        variant='outline'
                        className='border-gray-300 text-gray-700 hover:bg-gray-50'
                      >
                        <Globe className='h-4 w-4 mr-2' />
                        {websiteButtonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { BiographySection };
export type { ContactInfo, Education, BiographyProfile, BiographySectionProps };
