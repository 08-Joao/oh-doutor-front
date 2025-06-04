import { PlanType } from "./Plan";

export interface GetExam {
    id: string;
    name: string;
    description: string | null;
    durationMinutes: number;
    price: number;
    status: string;
    modality: GetModality;
    plans: GetPlan[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}

export interface GetModality {
    id: string;
    name: string;
    acronym: string;
}

export interface GetPlan {
    id: string;
    name: string;
    type: PlanType;
}

export enum ExamStatus {
    DRAFT = 'draft',
    INACTIVE = 'inactive',
    SUSPENDED = 'suspended',
    ACTIVE = 'active'
}
