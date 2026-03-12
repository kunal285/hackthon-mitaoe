import { Navigation } from "../components/Navigation";
import { Link } from "react-router";
import { Shield, Lock, Database, Eye, CheckCircle, Fingerprint, Activity } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm mb-6">
                <Shield className="w-4 h-4" />
                Government-Grade Security
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Secure Blockchain-Based E-Voting System
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transparent, tamper-proof digital voting using blockchain. Experience the future of democratic participation with end-to-end encryption and real-time verification.
              </p>
              
              <div className="flex gap-4">
                <Link 
                  to="/login" 
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Login to Vote
                </Link>
                
                <a 
                  href="#architecture" 
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  View System Architecture
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1631864031824-d636e1dc5292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczMjkyNTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Blockchain Network"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500/90 to-purple-600/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
                <Shield className="w-8 h-8 text-white mb-2" />
                <div className="text-white text-sm font-semibold">256-bit Encryption</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-500/90 to-blue-600/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
                <Activity className="w-8 h-8 text-white mb-2" />
                <div className="text-white text-sm font-semibold">Real-Time Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6" id="architecture">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Security Features</h2>
            <p className="text-gray-300 text-lg">Built with cutting-edge technology to ensure election integrity</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Card 1 */}
            <div className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <Fingerprint className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Biometric Authentication</h3>
                <p className="text-gray-400 text-sm">Verify voter identity using fingerprint and facial recognition technology</p>
              </div>
            </div>
            
            {/* Feature Card 2 */}
            <div className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">End-to-End Encryption</h3>
                <p className="text-gray-400 text-sm">Military-grade AES-256 encryption protects every vote from casting to counting</p>
              </div>
            </div>
            
            {/* Feature Card 3 */}
            <div className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-4">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Blockchain Ledger Storage</h3>
                <p className="text-gray-400 text-sm">Immutable distributed ledger ensures votes cannot be altered or deleted</p>
              </div>
            </div>
            
            {/* Feature Card 4 */}
            <div className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Real-Time Vote Counting</h3>
                <p className="text-gray-400 text-sm">Instant vote tabulation with transparent audit trails for verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Badges */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted & Certified</h2>
            <p className="text-gray-300">Compliant with international election security standards</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-semibold">ISO 27001 Certified</div>
              <div className="text-gray-400 text-sm">Information Security</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-teal-600 flex items-center justify-center mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-semibold">GDPR Compliant</div>
              <div className="text-gray-400 text-sm">Data Protection</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center mb-4">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-semibold">AES-256 Encryption</div>
              <div className="text-gray-400 text-sm">Military Grade</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-semibold">Blockchain Verified</div>
              <div className="text-gray-400 text-sm">Immutable Records</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-black/20 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">DelhiVote.net</span>
              </div>
              <p className="text-gray-400 text-sm">
                Secure, verifiable, and transparent digital voting for Delhi citizens
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/login" className="block text-gray-400 hover:text-white text-sm transition-colors">Login to Vote</Link>
                <Link to="/dashboard" className="block text-gray-400 hover:text-white text-sm transition-colors">Results Dashboard</Link>
                <a href="#architecture" className="block text-gray-400 hover:text-white text-sm transition-colors">System Architecture</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Project Info</h4>
              <p className="text-gray-400 text-sm mb-2">© 2026 DelhiVote.net</p>
              <p className="text-gray-400 text-sm">Built for transparent and tamper-resistant elections</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
