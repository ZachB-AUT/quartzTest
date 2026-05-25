
# Unity Feedback

In unity feedback, the difference between the output and input is feed back (get it?) into the input of the transfer function directly with no intermediate transfer function.

![[Pasted image 20260524152659.png|791]]

In this system, the *overall* transfer function becomes:

$$
T(s) = \frac{G(s)}{1 + G(s)}
$$
The sign of $G(s)$ depends on whether it is positive or negative in the summing
point (the circle with a cross). If the error is subtracted, (as is typical for
stable systems), the sign in the denominator is positive.

> [!Note]-  Working
> ---
> Given:
> - $R(s)$: System Input.
> - $E(s)$: System Error.
> - $C(s)$: System output.
> - $G(s)$: Forward Transfer function.
>
> And:
> - $C(s) = E(s)\cdot G(s)$
> - $E(s) = R(s) - C(s)$
>
> ---
> We are looking for $T(s) = \frac{C(s)}{R(s)}$ 
> $$
> C(s) = G(s)\cdot [R(s)-C(s)]
> $$
> $$
> C(s) = G(s)\cdot R(s) - G(s)\cdot C(s)
> $$
> $$
> G(s)\cdot R(s) = C(s) + G(s) \cdot C(s)
> $$
> Factor $C(s)$
> $$
> G(s)\cdot R(s) = C(s)\cdot [1 + G(s)]
> $$
> Solve for $T(s)$:
> $$
> T(s) = \frac{C(s)}{R(s)} = \frac{G(s)}{1+G(s)}
> $$


# Non-Unity feedback

In non-unity feedback, a transfer function is applied between the output and the summing point.

![[Pasted image 20260524160714.png|709]]

The overall transfer function for this system becomes 
$$
T(s) = \frac{G(s)}{1+G(s)H(s)}
$$

> [!note]- Working
> ---
> Given:
> - $R(s)$: System Input.
> - $E(s)$: System Error.
> - $C(s)$: System output.
> - $G(s)$: Forward Transfer function.
> - $H(s)$: Feedback transfer function.
> - $B(s)$: Feedback signal.
>
> And:
> - $C(s) = G(s)\cdot E(s)$
> - $E(s) = R(s) - B(s)$
> - $B(s) = C(s) \cdot H(s)$
>
> ---
> We need to find $T(s) = \frac{C(s)}{R(s)}$:  
> Perform substitutions:  
> $$
>   C(s) = G(s)\cdot (R(s) - (C(s) \cdot H(s))) 
> $$  
> Expand:  
> $$
>   C(s) = G(s)\cdot R(s) - G(s)\cdot C(s)\cdot H(s) 
> $$  
> Solve for $C(s)$  
> $$
>    C(s) + G(s) \cdot C(s) \cdot H(s) = G(s)\cdot R(s) 
> $$  
> $$
>   C(s) \cdot (1 + G(s)\cdot H(s)) = G(s)\cdot R(s) 
> $$  
> Solve for $T(s)$:  
> $$
>   \frac{C(s)}{R(s)} = \frac{G(s)}{1+G(s)\cdot H(s)} 
> $$  
 


