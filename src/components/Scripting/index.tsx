import html from "@/../public/tech/others/html.svg";
import css from "@/../public/tech/others/css.svg";
import sass from "@/../public/tech/others/sass.svg";
import git from "@/../public/tech/others/git.svg";
import graphql from "@/../public/tech/others/graphql.svg";
import json from "@/../public/tech/others/json.svg";
import npm from "@/../public/tech/others/npm.svg";

import javascript from "@/../public/tech/language/javascript.svg";
import typescript from "@/../public/tech/language/typescript.svg";
import java from "@/../public/tech/language/java.svg";
import c from "@/../public/tech/language/c.svg";
import csharp from "@/../public/tech/language/c#.svg";
import cpp from "@/../public/tech/language/c++.svg";
import python from "@/../public/tech/language/python.svg";
import ruby from "@/../public/tech/language/ruby.svg";
import php from "@/../public/tech/language/php.svg";

import reactjs from "@/../public/tech/framework/reactjs.svg";
import nodejs from "@/../public/tech/framework/nodejs.svg";
import nextjs from "@/../public/tech/framework/nextjs.svg";
import reactnative from "@/../public/tech/framework/react-native.svg";
import laravel from "@/../public/tech/framework/laravel.svg";
import django from "@/../public/tech/framework/django.svg";
import nestjs from "@/../public/tech/framework/nestjs.svg";
import vue from "@/../public/tech/framework/vue.svg";
import angular from "@/../public/tech/framework/angular.svg";

import database from "@/../public/tech/database/database.svg";
import mysql from "@/../public/tech/database/mysql.svg";
import postgresql from "@/../public/tech/database/postgresql.svg";
import mongodb from "@/../public/tech/database/mongodb.svg";

import firebase from "@/../public/tech/cloud/firebase.svg";
import aws from "@/../public/tech/cloud/aws.svg";
import azure from "@/../public/tech/cloud/azure.svg";
import gcp from "@/../public/tech/cloud/gcp.svg";
import heroku from "@/../public/tech/cloud/heroku.svg";
import vercel from "@/../public/tech/cloud/vercel.svg";
import netlify from "@/../public/tech/cloud/netlify.svg";
import github from "@/../public/tech/cloud/github.svg";

import figma from "@/../public/tech/tools/figma.svg";
import adobexd from "@/../public/tech/tools/adobe-xd.svg";
import photoshop from "@/../public/tech/tools/photoshop.svg";
import illustrator from "@/../public/tech/tools/illustrator.svg";
import premiere from "@/../public/tech/tools/premiere.svg";
import aftereffects from "@/../public/tech/tools/after-effects.svg";
import blender from "@/../public/tech/tools/blender.svg";
import unity from "@/../public/tech/tools/unity.svg";
import unreal from "@/../public/tech/tools/unreal.svg";
import godot from "@/../public/tech/tools/godot.svg";
import construct from "@/../public/tech/tools/construct.svg";
import gamemaker from "@/../public/tech/tools/gamemaker.svg";

import tailwind from "@/../public/tech/lib/tailwind.svg";
import three from "@/../public/tech/lib/three.svg";
import jquery from "@/../public/tech/lib/jquery.svg";
import express from "@/../public/tech/lib/express.svg";
import redux from "@/../public/tech/lib/redux.svg";
import jest from "@/../public/tech/lib/jest.svg";
import framer from "@/../public/tech/lib/framer.svg";
import expo from "@/../public/tech/lib/expo.svg";

import android from "@/../public/tech/so/android.svg";
import ios from "@/../public/tech/so/ios.svg";
import web from "@/../public/tech/so/web.svg";
import mobile from "@/../public/tech/so/mobile.svg";
import desktop from "@/../public/tech/so/desktop.svg";
import cloud from "@/../public/tech/so/cloud.svg";
import frontend from "@/../public/tech/so/frontend.svg";
import backend from "@/../public/tech/so/backend.svg";
import design from "@/../public/tech/so/design.svg";
import game from "@/../public/tech/so/game.svg";
import Image, { ImageProps } from "next/image";

export type ScriptingType =
  | "html"
  | "css"
  | "sass"
  | "git"
  | "json"
  | "npm"
  //
  | "javascript"
  | "java"
  | "c"
  | "c#"
  | "c++"
  | "python"
  | "ruby"
  | "php"
  //
  | "reactjs"
  | "nodejs"
  | "nextjs"
  | "react-native"
  | "laravel"
  | "django"
  | "nestjs"
  | "vue"
  | "angular"
  //
  | "typescript"
  //
  | "mysql"
  | "postgresql"
  | "mongodb"
  //
  | "firebase"
  | "aws"
  | "azure"
  | "gcp"
  | "heroku"
  | "vercel"
  | "netlify"
  | "github"
  | "gitlab"
  //
  | "graphql"
  | "docker"
  | "kubernets"
  //
  | "figma"
  | "adobe-xd"
  | "photoshop"
  | "illustrator"
  | "premiere"
  | "after-effects"
  | "blender"
  | "unity"
  | "unreal"
  | "godot"
  | "construct"
  | "gamemaker"
  //
  | "tailwind"
  | "three"
  | "express"
  | "jquery"
  | "redux"
  | "jest"
  | "framer"
  | "expo"
  //
  | "android"
  | "ios"
  | "web"
  | "mobile"
  | "desktop"
  | "cloud"
  | "database"
  | "frontend"
  | "backend"
  | "fullstack"
  | "devops"
  | "design"
  | "game";

const icons: { [key in ScriptingType]?: string } = {
  html: html,
  css: css,
  sass: sass,
  git: git,
  graphql: graphql,
  json: json,
  npm: npm,
  javascript: javascript,
  typescript: typescript,
  java: java,
  c: c,
  "c#": csharp,
  "c++": cpp,
  python: python,
  ruby: ruby,
  php: php,
  reactjs: reactjs,
  nodejs: nodejs,
  nextjs: nextjs,
  "react-native": reactnative,
  laravel: laravel,
  django: django,
  express: express,
  nestjs: nestjs,
  vue: vue,
  angular: angular,
  mysql: mysql,
  postgresql: postgresql,
  mongodb: mongodb,
  firebase: firebase,
  aws: aws,
  azure: azure,
  gcp: gcp,
  heroku: heroku,
  vercel: vercel,
  netlify: netlify,
  github: github,
  figma: figma,
  "adobe-xd": adobexd,
  photoshop: photoshop,
  illustrator: illustrator,
  premiere: premiere,
  "after-effects": aftereffects,
  blender: blender,
  unity: unity,
  unreal: unreal,
  godot: godot,
  construct: construct,
  gamemaker: gamemaker,
  tailwind: tailwind,
  three: three,
  jquery: jquery,
  redux: redux,
  jest: jest,
  framer: framer,
  expo: expo,
  android: android,
  ios: ios,
  web: web,
  mobile: mobile,
  desktop: desktop,
  cloud: cloud,
  database: database,
  frontend: frontend,
  backend: backend,
  design: design,
  game: game,
};

export default function Scripting({
  type,
  src: _,
  alt: __,
  ...props
}: { type: ScriptingType } & Partial<ImageProps>) {
  return (
    <Image src={icons[type] as string} {...props} alt={type + " logo icon"} />
  );
}

export function ScriptingWhite({
  type,
  width,
  height,

  src: _,
  alt: __,
  ...props
}: { type: ScriptingType } & Partial<ImageProps>) {
  const { src } = icons[type] as any;
  return (
    <div
      style={{
        mask: `url(${src})`,
        width,
        height,
      }}
      className="colorize-white"
      {...props}
    />
  );
}
