import React from "react";
import { 
  Target, 
  Users, 
  Award, 
  Leaf, 
  Shield, 
  Truck,
  CheckCircle,
  Heart,
  MapPin,
  Calendar,
  Star,
  ArrowRight
} from "lucide-react";

const AboutSection = () => {
  const milestones = [
    { year: "1985", event: "Family farm established", description: "Started with 50 chickens" },
    { year: "1995", event: "First commercial contract", description: "Supplied to 10 local farms" },
    { year: "2005", event: "Organic certification", description: "Became fully organic" },
    { year: "2015", event: "National expansion", description: "Serving 500+ farms" },
    { year: "2023", event: "Award recognition", description: "Best Poultry Farm Award" }
  ];

  const team = [
    {
      name: "John Wilson",
      role: "Founder & CEO",
      experience: "35+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      quote: "Quality begins with respect for nature and animals."
    },
    {
      name: "Sarah Johnson",
      role: "Head Veterinarian",
      experience: "15+ years",
      image: "data:image/jpeg;base64,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",
      quote: "Every bird's health is our top priority."
    },
    {
      name: "Michael Chen",
      role: "Farm Manager",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "Sustainable farming is farming for the future."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Welfare",
      description: "Humane treatment and comfortable living conditions for all our birds"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Eco-friendly practices that protect our environment"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous health checks and quality control standards"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Supporting local farmers and building lasting partnerships"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      
      {/* Hero About Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(#f4b63c 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  Since 1985
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-none mb-6">
                  Our Story of
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                    Poultry Excellence
                  </span>
                </h1>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  For over three decades, we've been dedicated to raising the highest 
                  quality poultry while maintaining our commitment to sustainability, 
                  animal welfare, and community support.
                </p>

                <p className="text-gray-600 mb-8">
                  What began as a small family farm has grown into a trusted partner 
                  for hundreds of farms nationwide, but our core values remain unchanged: 
                  integrity, quality, and respect for nature.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">35+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Partner Farms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">98.5%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Family poultry farm"
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-amber-100 rounded-xl">
                        <Award className="w-6 h-6 text-[#f4b63c]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Award Winning Quality</h3>
                        <p className="text-sm text-gray-500">Best Poultry Farm 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
              <div className="mb-6">
                <Target className="w-12 h-12 text-[#f4b63c] mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide the healthiest, most sustainable poultry products while 
                  setting new standards for animal welfare and environmental stewardship 
                  in the farming industry.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Deliver premium quality poultry products",
                  "Promote sustainable farming practices",
                  "Ensure animal welfare in all operations",
                  "Support local farming communities"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#f4b63c] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8">
              <div className="mb-6">
                <Star className="w-12 h-12 text-[#f4b63c] mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize poultry farming through innovation, creating a 
                  sustainable model that benefits farmers, consumers, and the planet 
                  for generations to come.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Lead in sustainable poultry farming",
                  "Expand nationwide with quality standards",
                  "Innovate with eco-friendly technologies",
                  "Educate next-generation farmers"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#f4b63c] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from farm management to 
              customer relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#f4b63c] hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-amber-100 text-[#f4b63c]">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 block">
                Leadership Team
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to excellence in poultry farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-b from-white to-amber-50 rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#f4b63c] font-semibold mb-2">{member.role}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {member.experience} experience
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4">
                    <p className="text-gray-700 italic text-sm">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 block">
                Through the Years
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-200 to-orange-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-[#f4b63c] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-[#f4b63c] rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Year on opposite side */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                    <div className="text-3xl font-bold text-gray-300">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutSection;