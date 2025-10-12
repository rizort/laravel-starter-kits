<script setup lang="ts">

//
// BUTTON
//
const loadingButton = ref(false);

const buttonLoad = () => {
    loadingButton.value = true;
    setTimeout(() => {
        loadingButton.value = false;
    }, 2000);
};

//
// TOAST
//
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const showToast = () => {
    toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Hello from PrimeVue 4!',
        life: 3000
    });
};

//
// DROPDOWN
//
const dropdownModel = ref();
const dropdownOptions = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);

//
// MULTISELECT
//
const multiSelectModel = ref();
const multiSelectOptions = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

//
// POPOVER
//
const popover1 = ref();
const popover2 = ref();

const togglePopover1 = (event) => {
    popover1.value.toggle(event);
}
const togglePopover2 = (event) => {
    popover2.value.toggle(event);
}

//
// DATATABLE
//
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';

const customers = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

onMounted(() => {

    customers.value = [
        {
            id: 1000,
            name: 'James Butt',
            country: {
                name: 'Algeria',
                code: 'dz'
            },
            company: 'Benton, John B Jr',
            date: '2015-09-13',
            status: 'unqualified',
            verified: true,
            activity: 17,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 70663
        },
        {
            id: 1001,
            name: 'Josephine Darakjy',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Chanay, Jeffrey A Esq',
            date: '2019-02-09',
            status: 'proposal',
            verified: true,
            activity: 0,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 82429
        },
    ];
    loading.value = false;

});

const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warn';

        case 'renewal':
            return null;
    }
}
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-950 md:px-12 lg:px-20">
        <div class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4 mb-10">
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl leading-tight">Components</div>
        </div>

        <!-- BUTTON -->
        <div class="card flex justify-center mb-10">
            <Button type="button" label="Button" icon="pi pi-search" :loading="loadingButton" @click="buttonLoad" />
        </div>

        <!-- TOAST -->
        <div class="flex justify-center mb-10">
            <Button icon="pi pi-share-alt" label="Toast" @click="showToast" />
        </div>

        <!-- DROPDOWN -->
        <div class="card flex justify-center mb-10">
            <Dropdown v-model="dropdownModel" filter :options="dropdownOptions" optionLabel="name" placeholder="Dropdown" class="w-full md:w-80" />
        </div>

        <!-- MULTISELECT -->
        <div class="card flex justify-center mb-10">
            <MultiSelect v-model="multiSelectModel" :options="multiSelectOptions" display="chip" optionLabel="name" filter placeholder="MutiSelect"
                         :maxSelectedLabels="3" class="w-full md:w-80" />
        </div>

        <!-- POPOVER -->
        <div class="card flex justify-center mb-10">
            <Button type="button" icon="pi pi-share-alt" label="Popover 1" @click="togglePopover1" class="mr-10" />
            <Button type="button" icon="pi pi-share-alt" label="Popover 2" @mouseenter="togglePopover2" @mouseleave="togglePopover2" />

            <Popover ref="popover1">
                <div class="flex flex-col gap-4 w-[25rem]">
                    <div>
                        <span class="font-medium block mb-2">Share this document</span>
                        <InputGroup>
                            <InputText value="https://primevue.org" readonly class="w-[25rem]"></InputText>
                        </InputGroup>
                    </div>
                </div>
            </Popover>

            <Popover ref="popover2">
                <div class="flex flex-col gap-4 w-[25rem]">
                    <div>
                        <span class="font-medium block mb-2">Share this document</span>
                        <InputGroup>
                            <InputText value="https://primevue.org" readonly class="w-[25rem]"></InputText>
                        </InputGroup>
                    </div>
                </div>
            </Popover>
        </div>

        <!-- DATATABLE -->
        <div class="ca1rd pb-100">
            <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading"
                       :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
                <template #header>
                    <div class="flex justify-end">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                        </IconField>
                    </div>
                </template>
                <template #empty> No customers found. </template>
                <template #loading> Loading customers data. Please wait. </template>
                <Column field="name" header="Name" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.name }}
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by name" />
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" style="min-width: 12rem">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />
                            <span>{{ data.country.name }}</span>
                        </div>
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by country" />
                    </template>
                </Column>
                <Column header="Agent" filterField="representative" :showFilterMenu="false" style="min-width: 14rem">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                            <span>{{ data.representative.name }}</span>
                        </div>
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" style="min-width: 14rem" :maxSelectedLabels="1">
                            <template #option="slotProps">
                                <div class="flex items-center gap-2">
                                    <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 32px" />
                                    <span>{{ slotProps.option.name }}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :showFilterMenu="false" style="min-width: 12rem">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="getSeverity(data.status)" />
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <Select v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" style="min-width: 12rem" :showClear="true">
                            <template #option="slotProps">
                                <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                            </template>
                        </Select>
                    </template>
                </Column>
                <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                    <template #body="{ data }">
                        <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <Checkbox v-model="filterModel.value" :indeterminate="filterModel.value === null" binary @change="filterCallback()" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

