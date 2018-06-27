<h1>Ping VMs of Openstack from your network</h1>
<h2>
A small tutorial of how to ping and access the VMs network<br>
from your Windows PC with Route commands<br>
</h2>
<br>
<h3>In OpenStack(Ubuntu):<br><h3>
<p>
	ex. $user@10.0.3.56:~ sudo route add -net 10.165.12.0/24 gw 10.65.195.29<br>
	sud route add -net [internal_vm_ip] gw [external_op_id]<br>
</p>
<br>
<h3>In Windows:<br><h3>
<p>
	ex. route -p ADD 10.156.12.0 MASK 255.255.255.0 10.0.3.56<br>
	ex2. route -p ADD 10.65.195.0 MASK 255.255.255.0 10.0.3.56<br>
	route -p ADD [internal_vm_ip] MASK [vm_mask] [windows_ip]<br>
	route -p ADD [internal_op_ip] MASk [op_mask] [windows_ip]<br>
	You have to do this EVERY TIME (no save)<br>
<p>
<br>
<br>
<p>thetechgeekster</p>