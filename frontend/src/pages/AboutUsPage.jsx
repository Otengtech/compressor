import React from "react";
import { 
  Target, 
  Users, 
  Leaf, 
  Shield, 
  CheckCircle,
  Heart,
  Calendar,
  Star
} from "lucide-react";
import banner from "../assets/banner2.jpg";

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
      image: "https://templateup.site/coopfarm/wp-content/uploads/sites/17/2024/09/img-team-4-min-v2.jpg",
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
      {/* Banner Section */}
      <div 
        className="relative w-full h-96 lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-center text-white">ABOUT PAGE</h1>
        </div>
      </div>
      
      {/* Hero About Section */}
      <section className="relative py-6 lg:py-10 overflow-hidden">
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
          <div className="flex flex-col items-center">
  <div className="w-full max-w-4xl">
    <div className="mb-8 items-center">
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Since 1985
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Our Story
          </h1>
        </div>
        
        <div className="md:w-1/2">
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            For over three decades, we've been dedicated to raising the highest 
            quality poultry while maintaining our commitment to sustainability, 
            animal welfare, and community support.
          </p>
          
          <p className="text-gray-600">
            What began as a small family farm has grown into a trusted partner 
            for hundreds of farms nationwide, but our core values remain unchanged: 
            integrity, quality, and respect for nature.
          </p>
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
                    <CheckCircle className="w-5 h-5 text-[#f4b63c] mr-3" />
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
                    <CheckCircle className="w-5 h-5 text-[#f4b63c] mr-3" />
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
              Meet Our Leadership Team
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
    </div>
  );
};

export default AboutSection;