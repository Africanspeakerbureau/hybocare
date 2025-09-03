import React, { useState, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import { downloads } from '@/content/downloads';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const industryOptions = [
  { value: 'data-centers', label: 'Data Centers' },
  { value: 'hospitals', label: 'Hospitals' },
  { value: 'greenhouses', label: 'Greenhouses' },
  { value: 'commercial', label: 'Commercial' },
];

const typeOptions = [
  { value: 'brochure', label: 'Brochure' },
  { value: 'specs', label: 'Specs' },
  { value: 'installation', label: 'Installation' },
  { value: 'certifications', label: 'Certifications' },
  { value: 'case-study', label: 'Case Study' },
  { value: 'maintenance', label: 'Maintenance' },
];

export default function DownloadsPage() {
  const [search, setSearch] = useState('');
  const [industries, setIndustries] = useState([]);
  const [types, setTypes] = useState([]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return downloads.filter((item) => {
      const matchesIndustry =
        industries.length === 0 ||
        industries.includes(item.industry) ||
        item.industry === 'all';
      const matchesType = types.length === 0 || types.includes(item.type);
      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesIndustry && matchesType && matchesSearch;
    });
  }, [search, industries, types]);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 space-y-12">
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold">All the docs in one place</h1>
          <p className="text-xl text-muted-foreground">
            Brochures, technical specs, certifications, and case studies—ready to share with your team.
          </p>
          <p className="text-muted-foreground">
            Need a one-pager for an exec, full technical specs for your engineer, or a case study for procurement? Start here.
          </p>
        </header>

        {/* Filters */}
        <div className="space-y-4">
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search downloads"
          />

          {/* Desktop filters */}
          <div className="hidden md:flex flex-wrap gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Industry:</span>
              {industryOptions.map((opt) => (
                <Button
                  key={opt.value}
                  variant={industries.includes(opt.value) ? 'default' : 'outline'}
                  onClick={() =>
                    setIndustries((prev) =>
                      prev.includes(opt.value)
                        ? prev.filter((i) => i !== opt.value)
                        : [...prev, opt.value]
                    )
                  }
                  aria-pressed={industries.includes(opt.value)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Type:</span>
              {typeOptions.map((opt) => (
                <Button
                  key={opt.value}
                  variant={types.includes(opt.value) ? 'default' : 'outline'}
                  onClick={() =>
                    setTypes((prev) =>
                      prev.includes(opt.value)
                        ? prev.filter((i) => i !== opt.value)
                        : [...prev, opt.value]
                    )
                  }
                  aria-pressed={types.includes(opt.value)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile filters */}
          <div className="md:hidden flex flex-col gap-2">
            <Select
              value={industries[0] ?? 'all'}
              onValueChange={(val) => setIndustries(val === 'all' ? [] : [val])}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All industries</SelectItem>
                {industryOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={types[0] ?? 'all'} onValueChange={(val) => setTypes(val === 'all' ? [] : [val])}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                {typeOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const meta = [
              item.size,
              item.updated ? `Updated ${format(parseISO(item.updated), 'MMM yyyy')}` : undefined,
            ]
              .filter(Boolean)
              .join(' • ');
            return (
              <Card key={item.id} className="w-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                {meta && (
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{meta}</p>
                  </CardContent>
                )}
                <CardFooter>
                  {item.href ? (
                    <Button asChild aria-label={`Download ${item.title}`}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </Button>
                  ) : (
                    <Button disabled title="Coming soon" aria-label={`${item.title} coming soon`}>
                      Coming Soon
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

