interface LoginResponse {
    token: string;
    error: boolean;
    message: string;
}

interface GraphDataResponse {
    data: any;
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
    const response = await fetch('https://timesheet-beta.vercel.app/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data: LoginResponse = await response.json();
    console.log(data);
    return data;
}

export async function fetchGraphData(endDate: string = '12-06-2024'): Promise<GraphDataResponse> {
    const response = await fetch(
        `https://timesheet-beta.vercel.app/api/v1/project/52d4cd64-0a6e-4cfa-802c-66f7f2968f15/data?end_date=${endDate}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch graph data');
    }

    const data: GraphDataResponse = await response.json();
    console.log(data,"api");
    return data;
}
