
docker build -t remarkies/portfolio .
docker push remarkies/portfolio
kubectl delete po -l app=tropeluc
