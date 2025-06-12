"use client"
import { GetExam, ExamStatus } from '@/models/dtos/Exames';
import Api from '@/services/Api';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { AddSquare, Calendar, ClockCircle, Dollar, Magnifer, Pulse } from '@solar-icons/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function ListaExames() {
    const [exames, setExames] = useState<GetExam[]>([]);
    const [filteredExames, setFilteredExames] = useState<GetExam[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState<string>('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getExames = async () => {
            try { 
                const response = await Api.getAllExames();

                if(response && 'data' in response){
                    setExames(response.data);
                    setFilteredExames(response.data);
                } 
            } catch (err) {
                console.warn(err)
            } finally {
                setIsLoading(false);
            }
        }

        getExames();
    }, [])

    useEffect(() => {
        let filtered = exames;

        if (searchTerm) {
            filtered = filtered.filter(exame => 
                exame.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                exame.modality.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedStatus !== 'all') {
            filtered = filtered.filter(exame => exame.status === selectedStatus);
        }

        setFilteredExames(filtered);
    }, [searchTerm, selectedStatus, exames]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case ExamStatus.ACTIVE:
                return 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-600';
            case ExamStatus.INACTIVE:
                return 'from-gray-500/20 to-slate-500/20 border-gray-500/30 text-gray-600';
            case ExamStatus.SUSPENDED:
                return 'from-red-500/20 to-rose-500/20 border-red-500/30 text-red-600';
            case ExamStatus.DRAFT:
                return 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-600';
            default:
                return 'from-primary/20 to-secondary/20 border-primary/30 text-primary';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case ExamStatus.ACTIVE:
                return 'Ativo';
            case ExamStatus.INACTIVE:
                return 'Inativo';
            case ExamStatus.SUSPENDED:
                return 'Suspenso';
            case ExamStatus.DRAFT:
                return 'Rascunho';
            default:
                return status;
        }
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price);
    };

    const formatDuration = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        if (hours > 0) {
            return `${hours}h ${mins > 0 ? `${mins}min` : ''}`;
        }
        return `${mins}min`;
    };

    if (isLoading) {
        return (
            <div className="size-full flex items-center justify-center">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-secondary rounded-full animate-spin animation-delay-150"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full p-6 space-y-6">
            <div className="w-full space-y-6">
                <div className="w-full flex items-center justify-end">
                    <button className="flex items-center bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/30 px-4 py-2">
                        <AddSquare weight="BoldDuotone" size={24} className="mr-2" />
                        Novo Exame
                    </button>
                </div>

                <div className="w-full relative backdrop-blur-xl bg-background/90 border border-border/20 rounded-2xl p-6 shadow-lg">
                    <div className="w-full flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1 min-w-0">
                            <Magnifer weight="BoldDuotone" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground" />
                            <Input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 h-12 bg-border border-border/30 rounded-xl text-foreground placeholder-muted-foreground transition-all duration-300 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 text-lg"
                                placeholder="Buscar exames..."
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Todos os Status</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Selecione um status</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => setSelectedStatus('all')}>Todos os Status</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelectedStatus(ExamStatus.ACTIVE)}>Ativo</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelectedStatus(ExamStatus.INACTIVE)}>Inativo</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelectedStatus(ExamStatus.SUSPENDED)}>Suspenso</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setSelectedStatus(ExamStatus.DRAFT)}>Rascunho</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {filteredExames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredExames.map((exame) => (
                        <div
                            key={exame.id}
                            className="group relative backdrop-blur-xl bg-background border border-border/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-[1.02] hover:border-primary/30"
                        >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground line-clamp-2 mb-2">
                                        {exame.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground w-full justify-between">
                                        <div className="flex justfify-center items-center gap-2">
                                            <Pulse weight="BoldDuotone" size={16} className="text-primary" />
                                            <span className='w-full'>{exame.modality.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-end">
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(exame.status)} backdrop-blur-sm border`}>
                                    {getStatusText(exame.status)}
                                </div>
                                <span className=" text-xs px-2 py-1 w-fit h-fit rounded-full bg-primary/10 text-primary">
                                    {exame.modality.acronym}
                                </span>
                                </div>
                            </div>

                            {exame.description && (
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {exame.description}
                                </p>
                            )}

                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <ClockCircle weight="BoldDuotone" size={16} className="text-primary" />
                                        <span>Duração</span>
                                    </div>
                                    <span className="font-medium text-foreground">
                                        {formatDuration(exame.durationMinutes)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Dollar weight="BoldDuotone" size={16} className="text-primary" />
                                        <span>Preço</span>
                                    </div>
                                    <span className="font-medium text-foreground">
                                        {formatPrice(exame.price)}
                                    </span>
                                </div>

                                {exame.plans.length > 0 && (
                                    <div>
                                        <span className="text-xs text-muted-foreground mb-2 block">Planos disponíveis:</span>
                                        <div className="flex flex-wrap gap-1">
                                            {exame.plans.map((plan) => (
                                                <span
                                                    key={plan.id}
                                                    className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                                                >
                                                    {plan.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border/20">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Calendar weight="BoldDuotone" size={14} />
                                    <span>
                                        {new Date(exame.createdAt).toLocaleDateString('pt-BR')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                ))}
            </div>
            ) : !isLoading ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <div className="relative mb-6">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                            <Pulse weight="BoldDuotone" size={40} className="text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse opacity-80"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        Nenhum exame encontrado
                    </h3>
                    <p className="text-muted-foreground text-center max-w-md">
                        {searchTerm || selectedStatus !== 'all' 
                            ? 'Tente ajustar os filtros para encontrar o que procura.'
                            : 'Comece criando seu primeiro exame para aparecer aqui.'
                        }
                    </p>
                </div>
            ) : null}
        </div>
    );
}