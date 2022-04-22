<?php

namespace App\Controller\api;
use App\Entity\User;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[AsController]
class CustomApiReqController extends AbstractController
{

    public function getUserCount(){

    }


    #[Route('/custom/api/req', name: 'app_custom_api_req')]
    public function index(): Response
    {
        return $this->render('custom_api_req/index.html.twig', [
            'controller_name' => 'CustomApiReqController',
        ]);
    }
}


