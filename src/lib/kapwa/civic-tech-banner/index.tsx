type CivicTechBannerItem = {
  title: string;
  highlightedWord: string;
  description: string;
  highlightedPhrase: string;
  primaryButton: {
    text: string;
    className?: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    className?: string;
    href: string;
  };
};

const CivicTechBanner = ({
  fullBannerTitle,
  fullBanner,
}: {
  fullBannerTitle: string;
  fullBanner: CivicTechBannerItem;
}) => {
  return (
    <div>
      <h3 className='font-medium mb-4'>{fullBannerTitle}</h3>
      <div className='relative overflow-hidden bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white py-12 rounded-lg'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            {fullBanner.title}{' '}
            <span className='text-yellow-200'>
              {fullBanner.highlightedWord}
            </span>{' '}
            Revolution
          </h2>
          <p className='text-lg mb-6 text-orange-100 max-w-2xl mx-auto'>
            {fullBanner.description}
            <strong className='text-yellow-200'>
              {' '}
              {fullBanner.highlightedPhrase}
            </strong>
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              className={
                fullBanner.primaryButton.className ||
                'bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100'
              }
              href={fullBanner.primaryButton.href}
            >
              {fullBanner.primaryButton.text}
            </a>
            <a
              className={
                fullBanner.secondaryButton.className ||
                'border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900'
              }
              href={fullBanner.secondaryButton.href}
            >
              {fullBanner.secondaryButton.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CivicTechBanner };
export type { CivicTechBannerItem };
