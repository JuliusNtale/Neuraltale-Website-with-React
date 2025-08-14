void __fastcall sub_444E20(void* thisPtr, void* edx, void* ecx) {
    // ECX = some object (possibly a form or control)
    // EDX = parameter (could be a class type)
    // EAX = 'this' (likely TApplication or TForm)
    
    // Call a method at [EDX - 0x0C] (possibly GetParent or similar)
    void* result = reinterpret_cast<void* (__thiscall*)(void*)>(*((uintptr_t*)edx - 3))(edx);
    
    *((void**)ecx) = result; // Store result in [ECX]
    
    // Delphi-style exception handling (try/finally block)
    __try {
        // Call a vtable method (offset +0x2C) - possibly SetParent or InitControls
        (*(void (__thiscall**)(void*, int))(*(uintptr_t*)result + 0x2C))(result, -1);
    } __finally {
        // Exception cleanup
    }
    
    // If [ESI+38h] is NULL, check if 'result' is a TWinControl
    if (*((void**)((uintptr_t)thisPtr + 0x38)) == nullptr) {
        if (System::IsClass(result, off_43B1F0)) { // Check if it's a TWinControl
            // Ensure the control has a valid HWND
            Controls::TWinControl::HandleNeeded((TWinControl*)result);
            *((void**)((uintptr_t)thisPtr + 0x38)) = result; // Store it
        }
    }
}void __fastcall sub_444E20(void* thisPtr, void* edx, void* ecx) {
    // ECX = some object (possibly a form or control)
    // EDX = parameter (could be a class type)
    // EAX = 'this' (likely TApplication or TForm)
    
    // Call a method at [EDX - 0x0C] (possibly GetParent or similar)
    void* result = reinterpret_cast<void* (__thiscall*)(void*)>(*((uintptr_t*)edx - 3))(edx);
    
    *((void**)ecx) = result; // Store result in [ECX]
    
    // Delphi-style exception handling (try/finally block)
    __try {
        // Call a vtable method (offset +0x2C) - possibly SetParent or InitControls
        (*(void (__thiscall**)(void*, int))(*(uintptr_t*)result + 0x2C))(result, -1);
    } __finally {
        // Exception cleanup
    }
    
    // If [ESI+38h] is NULL, check if 'result' is a TWinControl
    if (*((void**)((uintptr_t)thisPtr + 0x38)) == nullptr) {
        if (System::IsClass(result, off_43B1F0)) { // Check if it's a TWinControl
            // Ensure the control has a valid HWND
            Controls::TWinControl::HandleNeeded((TWinControl*)result);
            *((void**)((uintptr_t)thisPtr + 0x38)) = result; // Store it
        }
    }
}