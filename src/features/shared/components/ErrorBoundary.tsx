'use client';
import { Component, ReactNode } from 'react';
export class ErrorBoundary extends Component<{children:ReactNode},{hasError:boolean}> {
  constructor(p:any){ super(p); this.state={hasError:false}; }
  static getDerivedStateFromError(){ return {hasError:true}; }
  render(){ if(this.state.hasError) return <div className="p-4 text-red-600">Something went wrong.</div>; return this.props.children; }
}
