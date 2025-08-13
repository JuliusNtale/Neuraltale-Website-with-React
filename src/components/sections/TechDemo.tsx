'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Code, Terminal, Globe, Cpu } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const demoTabs = [
  {
    id: 'ai',
    title: 'AI Assistant',
    icon: Cpu,
    description: 'Interactive AI-powered code assistant',
    code: `// AI-Powered Code Assistant
import { NeuralTaleAI } from '@neuraltale/ai-core'

const assistant = new NeuralTaleAI({
  model: 'neuraltale-gpt-4',
  capabilities: ['code-generation', 'debugging', 'optimization']
})

// Generate optimized React component
const result = await assistant.generateComponent({
  type: 'dashboard',
  features: ['responsive', 'dark-mode', 'animations'],
  framework: 'react-next'
})

console.log('Generated component:', result.code)
// Output: Fully optimized React component with TypeScript`
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    icon: Globe,
    description: 'Scalable cloud deployment automation',
    code: `# NeuralTale Cloud Infrastructure as Code
terraform {
  required_providers {
    neuraltale = {
      source  = "neuraltale/cloud"
      version = "~> 2.0"
    }
  }
}

resource "neuraltale_cluster" "production" {
  name               = "production-cluster"
  region             = "us-west-2"
  auto_scaling       = true
  min_nodes          = 3
  max_nodes          = 100
  
  security {
    encryption_at_rest = true
    network_policies   = true
    rbac_enabled      = true
  }
  
  monitoring {
    enabled          = true
    retention_days   = 30
    alert_channels   = ["slack", "email"]
  }
}`
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    icon: Terminal,
    description: 'Advanced threat detection system',
    code: `#!/usr/bin/env python3
"""
NeuralTale Advanced Threat Detection System
Real-time security monitoring and response
"""

from neuraltale.security import ThreatDetector, SecurityAnalyzer
import asyncio

class AdvancedSecuritySystem:
    def __init__(self):
        self.detector = ThreatDetector(
            ml_models=['anomaly_detection', 'behavioral_analysis'],
            real_time=True,
            sensitivity='high'
        )
        self.analyzer = SecurityAnalyzer()
    
    async def monitor_threats(self):
        async for event in self.detector.stream_events():
            threat_level = await self.analyzer.assess_risk(event)
            
            if threat_level >= 8:
                await self.emergency_response(event)
            elif threat_level >= 5:
                await self.investigate_threat(event)
            
            self.log_security_event(event, threat_level)
    
    async def emergency_response(self, event):
        # Immediate threat isolation and notification
        await self.detector.isolate_threat(event.source)
        await self.notify_security_team(event, priority='CRITICAL')

# Initialize and start monitoring
security_system = AdvancedSecuritySystem()
asyncio.run(security_system.monitor_threats())`
  }
]

export default function TechDemo() {
  const [activeTab, setActiveTab] = useState(demoTabs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const handlePlay = () => {
    setIsPlaying(true)
    // Simulate demo execution
    setTimeout(() => setIsPlaying(false), 3000)
  }

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-900 to-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Interactive Tech Demo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge technologies in action with live, interactive demonstrations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            {demoTabs.map((tab, index) => {
              const IconComponent = tab.icon
              const isActive = activeTab.id === tab.id
              
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    w-full p-6 rounded-xl text-left transition-all duration-300 group
                    ${isActive 
                      ? 'glass neon-blue border-neon-blue/50' 
                      : 'glass border-gray-700 hover:border-gray-600'
                    }
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      p-3 rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'bg-neon-blue text-white neon-blue' 
                        : 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                      }
                    `}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`
                        text-lg font-bold mb-2 transition-colors
                        ${isActive ? 'text-neon-blue' : 'text-white group-hover:text-gray-200'}
                      `}>
                        {tab.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {tab.description}
                      </p>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-2 h-2 bg-neon-blue rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Code Editor Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Editor Header */}
            <div className="glass rounded-t-xl border border-gray-700 border-b-0">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-400 text-sm font-mono">
                    neuraltale-demo.{activeTab.id === 'cloud' ? 'tf' : activeTab.id === 'security' ? 'py' : 'js'}
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlay}
                  disabled={isPlaying}
                  className="flex items-center space-x-2 px-4 py-2 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {isPlaying ? 'Running...' : 'Run Demo'}
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Code Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="glass rounded-b-xl border border-gray-700 border-t-0 overflow-hidden">
                  <SyntaxHighlighter
                    language={activeTab.id === 'cloud' ? 'hcl' : activeTab.id === 'security' ? 'python' : 'javascript'}
                    style={atomDark}
                    customStyle={{
                      margin: 0,
                      background: 'transparent',
                      fontSize: '14px',
                      lineHeight: '1.5',
                    }}
                    showLineNumbers
                    wrapLines
                  >
                    {activeTab.code}
                  </SyntaxHighlighter>
                </div>

                {/* Execution Overlay */}
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-dark-bg/90 backdrop-blur-sm flex items-center justify-center rounded-b-xl"
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-12 h-12 border-4 border-neon-blue border-t-transparent rounded-full mx-auto mb-4"
                        />
                        <p className="text-neon-blue font-semibold">Executing {activeTab.title} Demo...</p>
                        <p className="text-gray-400 text-sm mt-2">Processing advanced algorithms</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* Demo Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: 'Lines of Code', value: activeTab.code.split('\n').length },
                { label: 'Execution Time', value: '~2.3s' },
                { label: 'Success Rate', value: '99.9%' }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-lg p-4 text-center border border-gray-700">
                  <div className="text-2xl font-bold text-neon-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-lg rounded-lg shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>Try Full Platform</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
