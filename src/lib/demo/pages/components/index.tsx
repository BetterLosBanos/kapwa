import React from 'react';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import { Button } from '@kapwa/button';
import { Banner } from '@kapwa/banner';

const Components: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-gray-900 pb-2'>Components</h1>
        <div className='bg-white rounded-lg shadow-xs my-8 p-8'>
          <div className='grid-cols-1 mb-8'>
            <h2 className='text-2xl font-semibold'>Card</h2>
            <p>Generic card component with header and content sections.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-6'>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-96'>
                <Card className='mb-8'>
                  <CardHeader>
                    <h2 className='text-2xl font-semibold'>
                      Apply for a Trademark Online
                    </h2>
                    <div className='mt-2 flex flex-wrap gap-2'>
                      <button className='cursor-pointer inline-block px-2 py-1 text-xs font-medium rounded-sm bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors hover:cursor-pointer'>
                        Business and Trade
                      </button>
                      <button className='cursor-pointer inline-block px-2 py-1 text-xs font-medium rounded-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors hover:cursor-pointer'>
                        Business Copyright, Trademark and Patent
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-3'>
                      <a
                        href='https://tm.ipophil.gov.ph/sp-ui-tmefiling/wizard.htm?execution=e1s1'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-800 text-sm hover:text-primary-600 transition-colors break-all line-clamp-1'
                      >
                        https://tm.ipophil.gov.ph/sp-ui-tmefiling/wizard.htm?execution=e1s1
                      </a>
                      <a
                        href='https://tm.ipophil.gov.ph/sp-ui-tmefiling/wizard.htm?execution=e1s1'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <button className='inline-flex items-center justify-center font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-offset-2 hover:bg-primary-600 focus:ring-primary-500 h-10 shadow-xs cursor-pointer bg-blue-600 text-white rounded-lg px-4 py-1 text-xs mt-4'>
                          View Service
                        </button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-96'>
                <Card className='mb-8'>
                  <CardHeader>
                    <h2 className='text-2xl font-semibold'>Key Information</h2>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-3'>
                      <div>
                        <div className='text-sm font-medium text-gray-800'>
                          Official Languages
                        </div>
                        <div className='text-gray-900'>Filipino, English</div>
                      </div>
                      <div>
                        <div className='text-sm font-medium text-gray-800'>
                          Government
                        </div>
                        <div className='text-gray-900'>
                          Presidential Constitutional Republic
                        </div>
                      </div>
                      <div>
                        <div className='text-sm font-medium text-gray-800'>
                          Currency
                        </div>
                        <div className='text-gray-900'>Philippine Peso (₱)</div>
                      </div>
                      <div>
                        <div className='text-sm font-medium text-gray-800'>
                          Time Zone
                        </div>
                        <div className='text-gray-900'>
                          UTC+8 (Philippine Standard Time)
                        </div>
                      </div>
                      <div>
                        <div className='text-sm font-medium text-gray-800'>
                          Major Cities
                        </div>
                        <div className='text-gray-900'>
                          Manila, Quezon City, Davao, Cebu
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className='grid grid-cols-1 mb-8'>
              <div className='grid grid-cols-1 mb-8'>
                <div className='w-96'>
                  <Card className='mb-8'>
                    <CardContent>
                      <div role='region' aria-label='Service details'>
                        <div className='flex items-start space-x-4'>
                          <div className='p-3 bg-primary-100 rounded-lg text-primary-600'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              className='lucide lucide-mountain h-6 w-6'
                              aria-hidden='true'
                            >
                              <path d='m8 3 4 8 5-5 5 15H2L8 3z'></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                              Landscape
                            </h3>
                            <p className='text-gray-800'>
                              Features mountains, volcanoes, tropical
                              rainforests, and beautiful beaches
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-xs my-8 p-8'>
          <div className='grid grid-cols-1 mb-8'>
            <h2 className='text-2xl font-semibold'>Button</h2>
            <p>Generic button component with various styles and sizes.</p>
          </div>
          <div className='grid grid-cols-1 p-6'>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-96'>
                <Button className='inline-flex items-center justify-center font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-offset-2 hover:bg-primary-600 focus:ring-primary-500 h-10 shadow-xs cursor-pointer bg-blue-600 text-white rounded-lg px-4 py-1 text-xs mt-4'>
                  View Service
                </Button>
              </div>
            </div>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-96'>
                <Button
                  className='flex items-center gap-2 px-4 py-2 rounded-md transition-colors cursor-pointer bg-blue-600 text-white'
                  leftIcon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-list h-4 w-4'
                      aria-hidden='true'
                    >
                      <path d='M3 12h.01'></path>
                      <path d='M3 18h.01'></path>
                      <path d='M3 6h.01'></path>
                      <path d='M8 12h13'></path>
                      <path d='M8 18h13'></path>
                      <path d='M8 6h13'></path>
                    </svg>
                  }
                >
                  Detail View
                </Button>
              </div>
            </div>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-96'>
                <Button
                  isLoading={true}
                  className='flex items-center gap-2 px-4 py-2 rounded-md transition-colors cursor-pointer bg-gray-600 text-white'
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-xs my-8 p-8'>
          <div className='grid grid-cols-1 mb-8'>
            <h2 className='text-2xl font-semibold'>Banner</h2>
            <p className='text-gray-800'>
              Generic banner component with various styles and sizes.
            </p>
          </div>
          <div className='grid grid-cols-1 rounded-lg shadow-xs p-6'>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-full'>
                <Banner
                  title='Government Services'
                  description='Access official government services quickly and easily. Find what you need for citizenship, business, education, and more.'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-full'>
                <Banner
                  title='Visa-Free Entry'
                  icon={true}
                  type='success'
                  description='Citizens of United States of America can enter the Philippines without a visa for up to 30 days.'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-full'>
                <Banner
                  title='Visa Required'
                  icon={true}
                  type='error'
                  description='Citizens of Ukraine need to apply for a visa before traveling to the Philippines.'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 mb-8'>
              <div className='w-full'>
                <Banner
                  title='Special Conditions Apply'
                  icon={true}
                  type='warning'
                  description='Citizens of India may enter the Philippines without a visa for up to 14 days (extendable to 21 days) under specific conditions.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
