<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Hero Section with Background -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1920&h=1080&fit=crop"
          alt="Coal Mining"
          class="w-full h-full object-cover opacity-30"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 container mx-auto px-6 text-center">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            Atlas Coal Exports
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powering Industries Worldwide with Premium Indonesian Coal
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center gap-2">
              Explore Products
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
            <button class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <!-- Stats -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl font-bold text-yellow-500 mb-2">15+</div>
            <div class="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl font-bold text-yellow-500 mb-2">50+</div>
            <div class="text-gray-400 text-sm">Global Partners</div>
          </div>
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl font-bold text-yellow-500 mb-2">2M+</div>
            <div class="text-gray-400 text-sm">Tons Exported</div>
          </div>
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div class="text-3xl font-bold text-yellow-500 mb-2">100%</div>
            <div class="text-gray-400 text-sm">Quality Assured</div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Products Slider Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Premium Products</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            High-quality coal products sourced from trusted Indonesian mines, tailored to meet your energy needs
          </p>
        </div>

        <!-- Slider -->
        <div class="relative max-w-5xl mx-auto">
          <div class="overflow-hidden rounded-2xl">
            <div
              class="flex transition-transform duration-500 ease-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <!-- Slide 1: Thermal Coal -->
              <div class="min-w-full">
                <div class="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl overflow-hidden">
                  <div class="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div class="flex flex-col justify-center">
                      <div class="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold mb-4 w-fit">
                        Best Seller
                      </div>
                      <h3 class="text-3xl md:text-4xl font-bold mb-4">Thermal Coal</h3>
                      <p class="text-gray-400 mb-6">
                        High-quality steam coal perfect for power generation and industrial applications. Consistent calorific value and low emissions.
                      </p>
                      <ul class="space-y-3 mb-8">
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">GAR 5500-6500 kcal/kg</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">Low sulfur content (&lt;1%)</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">Consistent quality control</span>
                        </li>
                      </ul>
                      <button class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 w-fit">
                        Request Quote
                      </button>
                    </div>
                    <div class="relative">
                      <img
                        src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=800&fit=crop"
                        alt="Thermal Coal"
                        class="w-full h-full object-cover rounded-xl"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 2: Coking Coal -->
              <div class="min-w-full">
                <div class="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl overflow-hidden">
                  <div class="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div class="flex flex-col justify-center">
                      <div class="inline-block px-4 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm font-semibold mb-4 w-fit">
                        Premium Quality
                      </div>
                      <h3 class="text-3xl md:text-4xl font-bold mb-4">Coking Coal</h3>
                      <p class="text-gray-400 mb-6">
                        Premium metallurgical coal for steel manufacturing. Sourced from the finest Indonesian mines with superior caking properties.
                      </p>
                      <ul class="space-y-3 mb-8">
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">High carbon content</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">Low ash percentage</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">Superior caking properties</span>
                        </li>
                      </ul>
                      <button class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 w-fit">
                        Request Quote
                      </button>
                    </div>
                    <div class="relative">
                      <img
                        src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=800&fit=crop"
                        alt="Coking Coal"
                        class="w-full h-full object-cover rounded-xl"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 3: Blended Coal -->
              <div class="min-w-full">
                <div class="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl overflow-hidden">
                  <div class="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div class="flex flex-col justify-center">
                      <div class="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4 w-fit">
                        Customizable
                      </div>
                      <h3 class="text-3xl md:text-4xl font-bold mb-4">Blended Coal</h3>
                      <p class="text-gray-400 mb-6">
                        Custom coal blends tailored to your specific requirements. We mix different coal grades to achieve your desired specifications.
                      </p>
                      <ul class="space-y-3 mb-8">
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">Custom calorific value</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">Optimized ash content</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <div class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <span class="text-gray-300">Cost-effective solutions</span>
                        </li>
                      </ul>
                      <button class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 w-fit">
                        Request Quote
                      </button>
                    </div>
                    <div class="relative">
                      <img
                        src="https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&h=800&fit=crop"
                        alt="Blended Coal"
                        class="w-full h-full object-cover rounded-xl"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slider Controls -->
          <button
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 group"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 group"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Slider Indicators -->
          <div class="flex justify-center gap-2 mt-8">
            <button
              v-for="(slide, index) in 3"
              :key="index"
              @click="currentSlide = index"
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-white/20 hover:bg-white/40'
              ]"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Why Choose Atlas?</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Industry-leading expertise and commitment to excellence in every shipment
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Card 1 -->
          <div class="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-3">Uncompromised Quality</h3>
              <p class="text-gray-400">
                Strict sampling, lab testing, and inspection protocols ensure product consistency and compliance with international export standards.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-3">Efficient Logistics</h3>
              <p class="text-gray-400">
                Integrated logistics network from mine to port ensures smooth operations, timely deliveries, and optimized supply chain management.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-3">Global Network</h3>
              <p class="text-gray-400">
                Trusted partnerships with international shipping lines and trading companies deliver excellence to clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Commitment Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Our Commitment</h2>
          <p class="text-xl text-gray-300 mb-12">
            Atlas Coal Exports is committed to delivering sustainable growth, operational transparency, and eco-conscious practices while maintaining the highest safety and compliance standards in the industry.
          </p>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <div class="text-yellow-500 mb-3">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 class="font-semibold text-lg mb-2">Sustainable Growth</h4>
              <p class="text-gray-400 text-sm">Long-term partnerships built on trust and reliability</p>
            </div>
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <div class="text-yellow-500 mb-3">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h4 class="font-semibold text-lg mb-2">Safety First</h4>
              <p class="text-gray-400 text-sm">Rigorous safety protocols at every operational stage</p>
            </div>
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <div class="text-yellow-500 mb-3">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 class="font-semibold text-lg mb-2">Eco-Conscious</h4>
              <p class="text-gray-400 text-sm">Environmental responsibility in all operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle, #fbbf24 1px, transparent 1px); background-size: 20px 20px;"></div>
          </div>
          <div class="relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's fuel your business growth together. Contact our team for inquiries, partnerships, or logistics support.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                Get Started
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
              <button class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1;
};

// Auto-slide functionality
let slideInterval;

onMounted(() => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
});

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #facc15;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #f59e0b;
}
</style>
