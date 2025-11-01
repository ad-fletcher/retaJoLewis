export default function About() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center">
          <h2 className="text-4xl md:text-5xl font-semibold">About Reta Jo Lewis</h2>
        </div>
        <div className="prose prose-lg max-w-none text-base md:text-lg leading-relaxed">
          <p className="mb-4 md:mb-6">
            Reta Jo Lewis is an accomplished attorney, diplomat, and business leader with more than 25 years of experience in international affairs and economic development. As the 27th President and Chair of the Export–Import Bank of the United States (2022–2025), she was the first African American and only the second woman to lead the agency, overseeing a $135 billion portfolio and expanding its global reach to nearly 180 countries.
          </p>
          <p className="mb-4 md:mb-6">
            Her career spans senior roles in the Obama and Clinton Administrations, leadership at the U.S. Chamber of Commerce, and decades of advocacy for small businesses, women, and minority entrepreneurs.
          </p>
          <p>
            A Life Member of the Council on Foreign Relations and recipient of the State Department's Distinguished Service Award, Lewis is recognized as a trailblazer in public service dedicated to advancing inclusive economic growth and American leadership worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

