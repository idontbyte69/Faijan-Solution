'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

type Service = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  isActive: boolean;
};

export default function ServicesPage() {
  const { data: session } = useSession();
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      title: 'NID Services',
      description: 'National ID card related services',
      category: 'Government Services',
      price: 500,
      isActive: true,
    },
    {
      id: '2',
      title: 'Passport Services',
      description: 'Passport application and renewal services',
      category: 'Government Services',
      price: 1000,
      isActive: true,
    },
    {
      id: '3',
      title: 'Computer Repair',
      description: 'Professional computer repair services',
      category: 'Computer Services',
      price: 300,
      isActive: true,
    },
    {
      id: '4',
      title: 'E-Return Filing',
      description: 'Electronic tax return filing services',
      category: 'Government Services',
      price: 800,
      isActive: true,
    },
  ]);

  const toggleServiceStatus = (id: string) => {
    setServices(services.map(service => 
      service.id === id 
        ? { ...service, isActive: !service.isActive }
        : service
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Services</h1>
        <Link
          href="/dashboard/services/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Add New Service
        </Link>
      </div>

      {/* Services List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {services.map((service) => (
            <li key={service.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-primary truncate">
                      {service.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {service.description}
                    </p>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        {service.category}
                      </div>
                      <div className="ml-6 flex items-center text-sm text-gray-500">
                        <svg
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        ৳{service.price}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex space-x-4">
                    <button
                      onClick={() => toggleServiceStatus(service.id)}
                      className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full ${
                        service.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {service.isActive ? 'Active' : 'Inactive'}
                    </button>
                    <Link
                      href={`/dashboard/services/${service.id}/edit`}
                      className="text-primary hover:text-accent"
                    >
                      Edit
                    </Link>
                    {session?.user?.role === 'admin' && (
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this service?')) {
                            setServices(services.filter(s => s.id !== service.id));
                          }
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 