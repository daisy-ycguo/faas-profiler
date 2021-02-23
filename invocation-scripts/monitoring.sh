FAAS_ROOT="/home/daisy/workspace/faas-profiler"
time_stamp=$(date +%s%N | cut -b1-13)
systemd-cgtop > $FAAS_ROOT'/logs/systemd-cgtop_'$time_stamp'.txt'