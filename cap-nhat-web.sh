#!/bin/bash
echo "==================================================="
echo "    ĐANG TỰ ĐỘNG CẬP NHẬT VinaMathLab LÊN VERCEL"
echo "==================================================="
git add .
read -p "Nhap noi dung cap nhat (hoac an Enter de dung mac dinh): " msg
if [ -z "$msg" ]; then
  msg="Cap nhat tinh nang moi"
fi
git commit -m "$msg"
git push
echo ""
echo "==================================================="
echo "  ĐÃ ĐẨY LÊN GITHUB! Vercel dang tu dong build..."
echo "==================================================="
