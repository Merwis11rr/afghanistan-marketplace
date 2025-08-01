import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Store, Search, Heart, Plus, Mail, Tag, MapPin, MessageCircle } from "lucide-react";

interface Ad {
  id: number;
  title: string;
  category: string;
  price: string;
  location: string;
  description: string;
}

export default function BazarAfghanMaster() {
  const [ads, setAds] = useState<Ad[]>([
    { 
      id: 1, 
      title: "موتر تویوتا کرولا ۲۰۱۸", 
      category: "موتر و وسایل نقلیه", 
      price: "12,000 دالر",
      location: "کابل",
      description: "موتر در حالت عالی، کیلومتر کم، تمام اسناد موجود"
    },
    { 
      id: 2, 
      title: "گلکسی S22 اولترا", 
      category: "الکترونیک", 
      price: "850 دالر",
      location: "هرات",
      description: "گوشی در حالت بسیار خوب، با تمام لوازم جانبی"
    },
    { 
      id: 3, 
      title: "قالین دستباف افغانی", 
      category: "خانه و آشپزخانه", 
      price: "350 دالر",
      location: "مزار شریف",
      description: "قالین اصل افغانی، دستباف، اندازه متوسط"
    },
  ]);
  
  const [favorites, setFavorites] = useState<Ad[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("ads");

  const addToFavorites = (ad: Ad) => {
    if (!favorites.find(item => item.id === ad.id)) {
      setFavorites([...favorites, ad]);
    }
  };

  const removeFromFavorites = (ad: Ad) => {
    setFavorites(favorites.filter(item => item.id !== ad.id));
  };

  const filteredAds = ads.filter(ad => 
    ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const AdCard = ({ ad }: { ad: Ad }) => {
    const isFavorited = favorites.some(fav => fav.id === ad.id);
    
    return (
      <Card className="glass-effect neon-border border-neon-green/30 rounded-lg overflow-hidden hover:neon-glow hover:border-neon-green transition-all duration-300 animate-float">
        <div className="w-full h-48 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 flex items-center justify-center">
          <Store className="h-16 w-16 text-neon-green/50" />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-neon-green">{ad.title}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => isFavorited ? removeFromFavorites(ad) : addToFavorites(ad)}
              className={`text-neon-pink hover:text-red-400 transition-colors ${
                isFavorited ? "text-red-500" : ""
              }`}
            >
              <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mb-2 flex items-center">
            <Tag className="h-3 w-3 ml-1" />
            {ad.category}
          </p>
          
          <p className="text-sm text-gray-400 mb-3 flex items-center">
            <MapPin className="h-3 w-3 ml-1" />
            {ad.location}
          </p>
          
          <p className="text-xl font-bold text-gold mb-3">
            {ad.price}
          </p>
          
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {ad.description}
          </p>
          
          <div className="flex space-x-reverse space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 neon-border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
            >
              <MessageCircle className="h-3 w-3 ml-1" />
              پیام
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 neon-border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300"
            >
              جزئیات
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="bg-dark-bg text-white min-h-screen" style={{ backgroundColor: 'hsl(0, 0%, 4%)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-neon-green/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-reverse space-x-4">
              <h1 className="text-2xl font-bold text-neon-green animate-glow">
                <Store className="inline-block ml-2" />
                بازار افغان مستر
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="جستجوی محصولات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-dark-card text-white border neon-border border-neon-cyan/50 rounded-lg px-4 py-2 pr-10 focus:border-neon-cyan focus:outline-none transition-all duration-300"
                />
                <Search className="absolute right-3 top-3 h-4 w-4 text-neon-cyan" />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-reverse space-x-4">
              <Button
                variant="outline"
                className="relative neon-border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300"
                onClick={() => setActiveTab("favorites")}
              >
                <Heart className="h-4 w-4" />
                <span className="mr-2">علاقه‌مندی‌ها</span>
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -left-2 bg-neon-pink text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Button>
              
              <Button
                variant="outline"
                className="neon-border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 animate-pulse-neon"
              >
                <Plus className="h-4 w-4" />
                <span className="mr-2">ثبت آگهی</span>
              </Button>
              
              <Button
                variant="outline"
                className="neon-border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                <span className="mr-2">پیام‌ها</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex justify-center gap-4 mb-6 bg-transparent">
            <TabsTrigger value="ads" className="border border-neon-green text-neon-green hover:bg-neon-green hover:text-black shadow-neon px-6 py-3 rounded-full data-[state=active]:bg-neon-green data-[state=active]:text-black">
              همه آگهی‌ها ({filteredAds.length})
            </TabsTrigger>
            <TabsTrigger value="favorites" className="border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black shadow-neon px-6 py-3 rounded-full data-[state=active]:bg-neon-pink data-[state=active]:text-black">
              علاقه‌مندی‌ها ({favorites.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ads">
            {filteredAds.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">هیچ آگهی‌ای یافت نشد</p>
                <p className="text-gray-500 text-sm mt-2">جستجوی جدیدی انجام دهید</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rtl-grid">
                {filteredAds.map((ad) => (
                  <AdCard key={ad.id} ad={ad} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="favorites">
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">هیچ آگهی مورد علاقه‌ای نیست</p>
                <p className="text-gray-500 text-sm mt-2">آگهی‌های مورد علاقه خود را با کلیک روی قلب اضافه کنید</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rtl-grid">
                {favorites.map((fav) => (
                  <AdCard key={fav.id} ad={fav} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}