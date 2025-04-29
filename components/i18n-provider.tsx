"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Locale = "en" | "zh" | "th"
type Translations = Record<string, Record<string, string>>

const translations: Translations = {
  // Navigation and common elements
  dashboard: {
    en: "Dashboard",
    zh: "仪表盘",
    th: "แดชบอร์ด",
  },
  series: {
    en: "Series Management",
    zh: "剧集管理",
    th: "จัดการซีรีส์",
  },
  sites: {
    en: "Regional Sites",
    zh: "分站管理",
    th: "ไซต์ภูมิภาค",
  },
  tags: {
    en: "Tags & Categories",
    zh: "标签与分类",
    th: "แท็กและหมวดหมู่",
  },
  statistics: {
    en: "Statistics",
    zh: "数据统计",
    th: "สถิติ",
  },
  pricing: {
    en: "Pricing & Promotions",
    zh: "定价与促销",
    th: "ราคาและโปรโมชั่น",
  },
  upload: {
    en: "Upload",
    zh: "上传",
    th: "อัปโหลด",
  },
  edit: {
    en: "Edit",
    zh: "编辑",
    th: "แก้ไข",
  },
  delete: {
    en: "Delete",
    zh: "删除",
    th: "ลบ",
  },
  save: {
    en: "Save",
    zh: "保存",
    th: "บันทึก",
  },
  cancel: {
    en: "Cancel",
    zh: "取消",
    th: "ยกเลิก",
  },
  globalAdmin: {
    en: "Global Admin",
    zh: "总后台",
    th: "ผู้ดูแลระบบทั่วไป",
  },
  regionalAdmin: {
    en: "Regional Admin",
    zh: "分站后台",
    th: "ผู้ดูแลระบบภูมิภาค",
  },
  male: {
    en: "Male",
    zh: "男生",
    th: "ผู้ชาย",
  },
  female: {
    en: "Female",
    zh: "女生",
    th: "ผู้หญิง",
  },
  language: {
    en: "Language",
    zh: "语言",
    th: "ภาษา",
  },
  english: {
    en: "English",
    zh: "英语",
    th: "ภาษาอังกฤษ",
  },
  chinese: {
    en: "Chinese",
    zh: "中文",
    th: "ภาษาจีน",
  },
  thai: {
    en: "Thai",
    zh: "泰语",
    th: "ภาษาไทย",
  },
  users: {
    en: "Users",
    zh: "用户管理",
    th: "ผู้ใช้",
  },
  settings: {
    en: "Settings",
    zh: "系统设置",
    th: "การตั้งค่า",
  },
  allSeries: {
    en: "All Series",
    zh: "所有剧集",
    th: "ซีรีส์ทั้งหมด",
  },
  uploadNew: {
    en: "Upload New",
    zh: "上传新剧",
    th: "อัปโหลดใหม่",
  },
  episodes: {
    en: "Episodes",
    zh: "剧集管理",
    th: "ตอน",
  },
  allSites: {
    en: "All Sites",
    zh: "所有分站",
    th: "ไซต์ทั้งหมด",
  },
  addSite: {
    en: "Add Site",
    zh: "添加分站",
    th: "เพิ่มไซต์",
  },
  uploadTasks: {
    en: "Upload Tasks",
    zh: "上传任务",
    th: "งานอัปโหลด",
  },
  siteSeries: {
    en: "Site Series",
    zh: "分站剧集",
    th: "ซีรีส์ตามไซต์",
  },
  subtitles: {
    en: "Subtitles",
    zh: "字幕",
    th: "คำบรรยาย",
  },
  downloadSubtitles: {
    en: "Download Subtitles",
    zh: "下载字幕",
    th: "ดาวน์โหลดคำบรรยาย",
  },
  uploadSubtitles: {
    en: "Upload Subtitles",
    zh: "上传字幕",
    th: "อัปโหลดคำบรรยาย",
  },
  supportedLanguages: {
    en: "Supported Languages",
    zh: "支持的语言",
    th: "ภาษาที่รองรับ",
  },
  availableSites: {
    en: "Available Sites",
    zh: "可用分站",
    th: "ไซต์ที่มี",
  },

  // Dashboard page
  overview: {
    en: "Overview",
    zh: "概览",
    th: "ภาพรวม",
  },
  analytics: {
    en: "Analytics",
    zh: "分析",
    th: "การวิเคราะห์",
  },
  totalSeries: {
    en: "Total Series",
    zh: "剧集总数",
    th: "ซีรีส์ทั้งหมด",
  },
  activeUsers: {
    en: "Active Users",
    zh: "活跃用户",
    th: "ผู้ใช้ที่ใช้งานอยู่",
  },
  revenue: {
    en: "Revenue",
    zh: "收入",
    th: "รายได้",
  },
  activeRegions: {
    en: "Active Regions",
    zh: "活跃地区",
    th: "ภูมิภาคที่ใช้งาน",
  },
  fromLastMonth: {
    en: "from last month",
    zh: "较上月",
    th: "จากเดือนที่แล้ว",
  },
  topPerformingSeries: {
    en: "Top Performing Series",
    zh: "表现最佳剧集",
    th: "ซีรีส์ที่มีประสิทธิภาพสูงสุด",
  },
  topByRevenue: {
    en: "Top 5 series by revenue this month",
    zh: "本月收入前5名剧集",
    th: "5 อันดับซีรีส์ที่มีรายได้สูงสุดในเดือนนี้",
  },
  detailedAnalytics: {
    en: "Detailed Analytics",
    zh: "详细分析",
    th: "การวิเคราะห์โดยละเอียด",
  },
  viewMetrics: {
    en: "View detailed performance metrics across all regions",
    zh: "查看所有地区的详细性能指标",
    th: "ดูเมตริกประสิทธิภาพโดยละเอียดในทุกภูมิภาค",
  },

  // Series management page
  seriesManagement: {
    en: "Series Management",
    zh: "剧集管理",
    th: "การจัดการซีรีส์",
  },
  manageAllSeries: {
    en: "Manage all your drama series, episodes, and language versions.",
    zh: "管理所有剧集、集数和语言版本。",
    th: "จัดการซีรีส์ละคร ตอน และเวอร์ชันภาษาทั้งหมดของคุณ",
  },
  searchSeries: {
    en: "Search series...",
    zh: "搜索剧集...",
    th: "ค้นหาซีรีส์...",
  },
  filter: {
    en: "Filter",
    zh: "筛选",
    th: "กรอง",
  },
  filterBy: {
    en: "Filter by",
    zh: "筛选条件",
    th: "กรองตาม",
  },
  status: {
    en: "Status",
    zh: "状态",
    th: "สถานะ",
  },
  addNewSeries: {
    en: "Add New Series",
    zh: "添加新剧集",
    th: "เพิ่มซีรีส์ใหม่",
  },
  id: {
    en: "ID",
    zh: "ID",
    th: "รหัส",
  },
  title: {
    en: "Title",
    zh: "标题",
    th: "ชื่อเรื่อง",
  },
  episodes: {
    en: "Episodes",
    zh: "集数",
    th: "ตอน",
  },
  languages: {
    en: "Languages",
    zh: "语言",
    th: "ภาษา",
  },
  actions: {
    en: "Actions",
    zh: "操作",
    th: "การดำเนินการ",
  },
  published: {
    en: "Published",
    zh: "已发布",
    th: "เผยแพร่แล้ว",
  },
  draft: {
    en: "Draft",
    zh: "草稿",
    th: "ร่าง",
  },
  manageEpisodes: {
    en: "Manage Episodes",
    zh: "管理集数",
    th: "จัดการตอน",
  },
  languageVersions: {
    en: "Language Versions",
    zh: "语言版本",
    th: "เวอร์ชันภาษา",
  },
  export: {
    en: "Export",
    zh: "导出",
    th: "ส่งออก",
  },

  // Regional sites page
  regionalSites: {
    en: "Regional Sites Management",
    zh: "分站管理",
    th: "การจัดการไซต์ภูมิภาค",
  },
  manageSites: {
    en: "Manage all your regional sites, currencies, and language settings.",
    zh: "管理所有分站、货币和语言设置。",
    th: "จัดการไซต์ภูมิภาค สกุลเงิน และการตั้งค่าภาษาทั้งหมดของคุณ",
  },
  addNewSite: {
    en: "Add New Site",
    zh: "添加新分站",
    th: "เพิ่มไซต์ใหม่",
  },
  region: {
    en: "Region",
    zh: "地区",
    th: "ภูมิภาค",
  },
  currency: {
    en: "Currency",
    zh: "货币",
    th: "สกุลเงิน",
  },
  series: {
    en: "Series",
    zh: "剧集",
    th: "ซีรีส์",
  },
  users: {
    en: "Users",
    zh: "用户",
    th: "ผู้ใช้",
  },
  active: {
    en: "Active",
    zh: "活跃",
    th: "ใช้งาน",
  },
  setup: {
    en: "Setup",
    zh: "设置",
    th: "ตั้งค่า",
  },
  configure: {
    en: "Configure",
    zh: "配置",
    th: "กำหนดค่า",
  },
  viewDashboard: {
    en: "View Dashboard",
    zh: "查看仪表盘",
    th: "ดูแดชบอร์ด",
  },

  // Tags page
  primaryTags: {
    en: "Primary Tags",
    zh: "一级标签",
    th: "แท็กหลัก",
  },
  secondaryTags: {
    en: "Secondary Tags",
    zh: "二级标签",
    th: "แท็กรอง",
  },
  fixedTags: {
    en: "These are fixed tags that cannot be modified or deleted.",
    zh: "这些是固定标签，不能修改或删除。",
    th: "เหล่านี้เป็นแท็กคงที่ที่ไม่สามารถแก้ไขหรือลบได้",
  },
  editableTags: {
    en: "These tags can be created, modified, and deleted as needed.",
    zh: "这些标签可以根据需要创建、修改和删除。",
    th: "แท็กเหล่านี้สามารถสร้าง แก้ไข และลบได้ตามต้องการ",
  },
  name: {
    en: "Name",
    zh: "名称",
    th: "ชื่อ",
  },
  type: {
    en: "Type",
    zh: "类型",
    th: "ประเภท",
  },
  seriesCount: {
    en: "Series Count",
    zh: "剧集数量",
    th: "จำนวนซีรีส์",
  },
  systemTag: {
    en: "System Tag",
    zh: "系统标签",
    th: "แท็กระบบ",
  },
  addNewTag: {
    en: "Add New Tag",
    zh: "添加新标签",
    th: "เพิ่มแท็กใหม่",
  },
  primary: {
    en: "Primary",
    zh: "一级",
    th: "หลัก",
  },
  secondary: {
    en: "Secondary",
    zh: "二级",
    th: "รอง",
  },

  // Statistics page
  revenueOverTime: {
    en: "Revenue Over Time",
    zh: "收入趋势",
    th: "รายได้ตามเวลา",
  },
  monthlyRevenue: {
    en: "Monthly revenue across all regions",
    zh: "所有地区的月度收入",
    th: "รายได้รายเดือนในทุกภูมิภาค",
  },
  revenueByRegion: {
    en: "Revenue by Region",
    zh: "各地区收入",
    th: "รายได้ตามภูมิภาค",
  },
  distributionAcrossRegions: {
    en: "Distribution across regions",
    zh: "跨地区分布",
    th: "การกระจายตัวในภูมิภาคต่างๆ",
  },
  userActivity: {
    en: "User Activity",
    zh: "用户活动",
    th: "กิจกรรมของผู้ใช้",
  },
  monthlyActiveUsers: {
    en: "Monthly active users and new registrations",
    zh: "月活跃用户和新注册",
    th: "ผู้ใช้ที่ใช้งานรายเดือนและการลงทะเบียนใหม่",
  },
  activeUsers: {
    en: "Active Users",
    zh: "活跃用户",
    th: "ผู้ใช้ที่ใช้งานอยู่",
  },
  newUsers: {
    en: "New Users",
    zh: "新用户",
    th: "ผู้ใช้ใหม่",
  },
  contentAnalytics: {
    en: "Content Analytics",
    zh: "内容分析",
    th: "การวิเคราะห์เนื้อหา",
  },
  genreDistribution: {
    en: "Genre Distribution",
    zh: "类型分布",
    th: "การกระจายตัวของประเภท",
  },
  distributionByGenre: {
    en: "Distribution of content by genre",
    zh: "按类型划分的内容分布",
    th: "การกระจายตัวของเนื้อหาตามประเภท",
  },
  seriesWithHighestRevenue: {
    en: "Series with highest revenue",
    zh: "收入最高的剧集",
    th: "ซีรีส์ที่มีรายได้สูงสุด",
  },
  selectRegion: {
    en: "Select Region",
    zh: "选择地区",
    th: "เลือกภูมิภาค",
  },
  allRegions: {
    en: "All Regions",
    zh: "所有地区",
    th: "ทุกภูมิภาค",
  },
  unitedStates: {
    en: "United States",
    zh: "美国",
    th: "สหรัฐอเมริกา",
  },
  china: {
    en: "China",
    zh: "中国",
    th: "จีน",
  },
  thailand: {
    en: "Thailand",
    zh: "泰国",
    th: "ประเทศไทย",
  },
  india: {
    en: "India",
    zh: "印度",
    th: "อินเดีย",
  },
  japan: {
    en: "Japan",
    zh: "日本",
    th: "ญี่ปุ่น",
  },

  // User management
  userManagement: {
    en: "User Management",
    zh: "用户管理",
    th: "การจัดการผู้ใช้",
  },
  manageUsers: {
    en: "Manage all users, roles, and permissions.",
    zh: "管理所有用户、角色和权限。",
    th: "จัดการผู้ใช้ บทบาท และสิทธิ์ทั้งหมด",
  },
  searchUsers: {
    en: "Search users...",
    zh: "搜索用户...",
    th: "ค้นหาผู้ใช้...",
  },
  addUser: {
    en: "Add User",
    zh: "添加用户",
    th: "เพิ่มผู้ใช้",
  },
  allUsers: {
    en: "All Users",
    zh: "所有用户",
    th: "ผู้ใช้ทั้งหมด",
  },
  admins: {
    en: "Admins",
    zh: "管理员",
    th: "ผู้ดูแลระบบ",
  },
  editors: {
    en: "Editors",
    zh: "编辑",
    th: "บรรณาธิการ",
  },
  viewers: {
    en: "Viewers",
    zh: "观众",
    th: "ผู้ชม",
  },
  role: {
    en: "Role",
    zh: "角色",
    th: "บทบาท",
  },
  email: {
    en: "Email",
    zh: "电子邮件",
    th: "อีเมล",
  },
  lastLogin: {
    en: "Last Login",
    zh: "上次登录",
    th: "เข้าสู่ระบบครั้งล่าสุด",
  },
  resetPassword: {
    en: "Reset Password",
    zh: "重置密码",
    th: "รีเซ็ตรหัสผ่าน",
  },
  adminUsers: {
    en: "Admin Users",
    zh: "管理员用户",
    th: "ผู้ใช้ที่เป็นผู้ดูแลระบบ",
  },
  manageAdminUsers: {
    en: "Manage administrator users and permissions",
    zh: "管理管理员用户和权限",
    th: "จัดการผู้ใช้ที่เป็นผู้ดูแลระบบและสิทธิ์",
  },
  adminUsersContent: {
    en: "Admin users list will be displayed here",
    zh: "管理员用户列表将显示在此处",
    th: "รายชื่อผู้ใช้ที่เป็นผู้ดูแลระบบจะแสดงที่นี่",
  },
  editorUsers: {
    en: "Editor Users",
    zh: "编辑用户",
    th: "ผู้ใช้ที่เป็นบรรณาธิการ",
  },
  manageEditorUsers: {
    en: "Manage editor users and permissions",
    zh: "管理编辑用户和权限",
    th: "จัดการผู้ใช้ที่เป็นบรรณาธิการและสิทธิ์",
  },
  editorUsersContent: {
    en: "Editor users list will be displayed here",
    zh: "编辑用户列表将显示在此处",
    th: "รายชื่อผู้ใช้ที่เป็นบรรณาธิการจะแสดงที่นี่",
  },
  viewerUsers: {
    en: "Viewer Users",
    zh: "观众用户",
    th: "ผู้ใช้ที่เป็นผู้ชม",
  },
  manageViewerUsers: {
    en: "Manage viewer users and permissions",
    zh: "管理观众用户和权限",
    th: "จัดการผู้ใช้ที่เป็นผู้ชมและสิทธิ์",
  },
  viewerUsersContent: {
    en: "Viewer users list will be displayed here",
    zh: "观众用户列表将显示在此处",
    th: "รายชื่อผู้ใช้ที่เป็นผู้ชมจะแสดงที่นี่",
  },

  // Settings page
  general: {
    en: "General",
    zh: "常规",
    th: "ทั่วไป",
  },
  appearance: {
    en: "Appearance",
    zh: "外观",
    th: "รูปลักษณ์",
  },
  notifications: {
    en: "Notifications",
    zh: "通知",
    th: "การแจ้งเตือน",
  },
  security: {
    en: "Security",
    zh: "安全",
    th: "ความปลอดภัย",
  },
  api: {
    en: "API",
    zh: "API",
    th: "API",
  },
  generalSettings: {
    en: "General Settings",
    zh: "常规设置",
    th: "การตั้งค่าทั่วไป",
  },
  manageGeneralSettings: {
    en: "Manage general platform settings",
    zh: "管理平台常规设置",
    th: "จัดการการตั้งค่าแพลตฟอร์มทั่วไป",
  },
  platformName: {
    en: "Platform Name",
    zh: "平台名称",
    th: "ชื่อแพลตฟอร์ม",
  },
  platformNameDescription: {
    en: "The name of your drama platform",
    zh: "您的戏剧平台的名称",
    th: "ชื่อของแพลตฟอร์มละครของคุณ",
  },
  contactEmail: {
    en: "Contact Email",
    zh: "联系邮箱",
    th: "อีเมลติดต่อ",
  },
  contactEmailDescription: {
    en: "Email address for system notifications and user support",
    zh: "用于系统通知和用户支持的电子邮件地址",
    th: "ที่อยู่อีเมลสำหรับการแจ้งเตือนระบบและการสนับสนุนผู้ใช้",
  },
  defaultLanguage: {
    en: "Default Language",
    zh: "默认语言",
    th: "ภาษาเริ่มต้น",
  },
  defaultLanguageDescription: {
    en: "Default language for new users and content",
    zh: "新用户和内容的默认语言",
    th: "ภาษาเริ่มต้นสำหรับผู้ใช้ใหม่และเนื้อหา",
  },
  selectLanguage: {
    en: "Select Language",
    zh: "选择语言",
    th: "เลือกภาษา",
  },
  timezone: {
    en: "Timezone",
    zh: "时区",
    th: "เขตเวลา",
  },
  selectTimezone: {
    en: "Select Timezone",
    zh: "选择时区",
    th: "เลือกเขตเวลา",
  },
  timezoneDescription: {
    en: "Default timezone for scheduling and reporting",
    zh: "用于调度和报告的默认时区",
    th: "เขตเวลาเริ่มต้นสำหรับการกำหนดเวลาและการรายงาน",
  },
  maintenanceMode: {
    en: "Maintenance Mode",
    zh: "维护模式",
    th: "โหมดบำรุงรักษา",
  },
  maintenanceModeDescription: {
    en: "Enable maintenance mode to temporarily disable user access",
    zh: "启用维护模式以临时禁用用户访问",
    th: "เปิดใช้งานโหมดบำรุงรักษาเพื่อปิดการเข้าถึงของผู้ใช้ชั่วคราว",
  },
  saveChanges: {
    en: "Save Changes",
    zh: "保存更改",
    th: "บันทึกการเปลี่ยนแปลง",
  },
  appearanceSettings: {
    en: "Appearance Settings",
    zh: "外观设置",
    th: "การตั้งค่ารูปลักษณ์",
  },
  manageAppearanceSettings: {
    en: "Manage platform appearance and theme",
    zh: "管理平台外观和主题",
    th: "จัดการรูปลักษณ์และธีมของแพลตฟอร์ม",
  },
  theme: {
    en: "Theme",
    zh: "主题",
    th: "ธีม",
  },
  light: {
    en: "Light",
    zh: "浅色",
    th: "สว่าง",
  },
  dark: {
    en: "Dark",
    zh: "深色",
    th: "มืด",
  },
  system: {
    en: "System",
    zh: "系统",
    th: "ระบบ",
  },
  primaryColor: {
    en: "Primary Color",
    zh: "主色",
    th: "สีหลัก",
  },
  animations: {
    en: "Animations",
    zh: "动画",
    th: "ภาพเคลื่อนไหว",
  },
  animationsDescription: {
    en: "Enable animations throughout the platform",
    zh: "在整个平台上启用动画",
    th: "เปิดใช้งานภาพเคลื่อนไหวทั่วทั้งแพลตฟอร์ม",
  },
  notificationSettings: {
    en: "Notification Settings",
    zh: "通知设置",
    th: "การตั้งค่าการแจ้งเตือน",
  },
  manageNotificationSettings: {
    en: "Manage notification preferences",
    zh: "管理通知首选项",
    th: "จัดการการตั้งค่าการแจ้งเตือน",
  },
  emailNotifications: {
    en: "Email Notifications",
    zh: "电子邮件通知",
    th: "การแจ้งเตือนทางอีเมล",
  },
  emailNotificationsDescription: {
    en: "Receive important updates via email",
    zh: "通过电子邮件接收重要更新",
    th: "รับการอัปเดตที่สำคัญทางอีเมล",
  },
  systemNotifications: {
    en: "System Notifications",
    zh: "系统通知",
    th: "การแจ้งเตือนระบบ",
  },
  systemNotificationsDescription: {
    en: "Receive in-app notifications",
    zh: "接收应用内通知",
    th: "รับการแจ้งเตือนในแอป",
  },
  marketingEmails: {
    en: "Marketing Emails",
    zh: "营销电子邮件",
    th: "อีเมลการตลาด",
  },
  marketingEmailsDescription: {
    en: "Receive promotional content and newsletters",
    zh: "接收促销内容和新闻通讯",
    th: "รับเนื้อหาส่งเสริมการขายและจดหมายข่าว",
  },
  securitySettings: {
    en: "Security Settings",
    zh: "安全设置",
    th: "การตั้งค่าความปลอดภัย",
  },
  manageSecuritySettings: {
    en: "Manage account security settings",
    zh: "管理账户安全设置",
    th: "จัดการการตั้งค่าความปลอดภัยของบัญชี",
  },
  changePassword: {
    en: "Change Password",
    zh: "更改密码",
    th: "เปลี่ยนรหัสผ่าน",
  },
  newPassword: {
    en: "New Password",
    zh: "新密码",
    th: "รหัสผ่านใหม่",
  },
  confirmPassword: {
    en: "Confirm Password",
    zh: "确认密码",
    th: "ยืนยันรหัสผ่าน",
  },
  twoFactorAuth: {
    en: "Two-Factor Authentication",
    zh: "双因素认证",
    th: "การยืนยันตัวตนแบบสองปัจจัย",
  },
  twoFactorAuthDescription: {
    en: "Add an extra layer of security to your account",
    zh: "为您的账户添加额外的安全层",
    th: "เพิ่มชั้นความปลอดภัยพิเศษให้กับบัญชีของคุณ",
  },
  apiSettings: {
    en: "API Settings",
    zh: "API设置",
    th: "การตั้งค่า API",
  },
  manageApiSettings: {
    en: "Manage API keys and webhooks",
    zh: "管理API密钥和网络钩子",
    th: "จัดการคีย์ API และเว็บฮุค",
  },
  apiKey: {
    en: "API Key",
    zh: "API密钥",
    th: "คีย์ API",
  },
  apiKeyDescription: {
    en: "Use this key to authenticate API requests",
    zh: "使用此密钥验证API请求",
    th: "ใช้คีย์นี้เพื่อตรวจสอบคำขอ API",
  },
  copy: {
    en: "Copy",
    zh: "复制",
    th: "คัดลอก",
  },
  regenerate: {
    en: "Regenerate",
    zh: "重新生成",
    th: "สร้างใหม่",
  },
  webhookUrl: {
    en: "Webhook URL",
    zh: "网络钩子URL",
    th: "URL เว็บฮุค",
  },
  webhookUrlDescription: {
    en: "URL to receive webhook notifications",
    zh: "接收网络钩子通知的URL",
    th: "URL เพื่อรับการแจ้งเตือนเว็บฮุค",
  },
  apiAccess: {
    en: "API Access",
    zh: "API访问",
    th: "การเข้าถึง API",
  },
  apiAccessDescription: {
    en: "Enable API access for this account",
    zh: "为此账户启用API访问",
    th: "เปิดใช้งานการเข้าถึง API สำหรับบัญชีนี้",
  },

  // Upload Tasks
  uploadTaskManagement: {
    en: "Upload Task Management",
    zh: "上传任务管理",
    th: "การจัดการงานอัปโหลด",
  },
  manageUploadTasks: {
    en: "Manage and monitor all upload tasks",
    zh: "管理和监控所有上传任务",
    th: "จัดการและติดตามงานอัปโหลดทั้งหมด",
  },
  taskId: {
    en: "Task ID",
    zh: "任务ID",
    th: "รหัสงาน",
  },
  taskName: {
    en: "Task Name",
    zh: "任务名称",
    th: "ชื่องาน",
  },
  progress: {
    en: "Progress",
    zh: "进度",
    th: "ความคืบหน้า",
  },
  startTime: {
    en: "Start Time",
    zh: "开始时间",
    th: "เวลาเริ่มต้น",
  },
  estimatedCompletion: {
    en: "Estimated Completion",
    zh: "预计完成时间",
    th: "เวลาเสร็จสิ้นโดยประมาณ",
  },
  taskStatus: {
    en: "Status",
    zh: "状态",
    th: "สถานะ",
  },
  inProgress: {
    en: "In Progress",
    zh: "进行中",
    th: "กำลังดำเนินการ",
  },
  completed: {
    en: "Completed",
    zh: "已完成",
    th: "เสร็จสิ้น",
  },
  failed: {
    en: "Failed",
    zh: "失败",
    th: "ล้มเหลว",
  },
  queued: {
    en: "Queued",
    zh: "排队中",
    th: "อยู่ในคิว",
  },
  paused: {
    en: "Paused",
    zh: "已暂停",
    th: "หยุดชั่วคราว",
  },
  pauseTask: {
    en: "Pause Task",
    zh: "暂停任务",
    th: "หยุดงานชั่วคราว",
  },
  resumeTask: {
    en: "Resume Task",
    zh: "恢复任务",
    th: "ดำเนินงานต่อ",
  },
  cancelTask: {
    en: "Cancel Task",
    zh: "取消任务",
    th: "ยกเลิกงาน",
  },
  retryTask: {
    en: "Retry Task",
    zh: "重试任务",
    th: "ลองใหม่",
  },
  viewDetails: {
    en: "View Details",
    zh: "查看详情",
    th: "ดูรายละเอียด",
  },

  // Site Series Management
  siteSeriesManagement: {
    en: "Site Series Management",
    zh: "分站剧集管理",
    th: "การจัดการซีรีส์ตามไซต์",
  },
  manageSiteSeries: {
    en: "Manage series availability across regional sites",
    zh: "管理各分站的剧集可用性",
    th: "จัดการความพร้อมใช้งานของซีรีส์ในไซต์ภูมิภาคต่างๆ",
  },
  selectSite: {
    en: "Select Site",
    zh: "选择分站",
    th: "เลือกไซต์",
  },
  availableSeries: {
    en: "Available Series",
    zh: "可用剧集",
    th: "ซีรีส์ที่มี",
  },
  subtitleManagement: {
    en: "Subtitle Management",
    zh: "字幕管理",
    th: "การจัดการคำบรรยาย",
  },
  uploadNewSubtitle: {
    en: "Upload New Subtitle",
    zh: "上传新字幕",
    th: "อัปโหลดคำบรรยายใหม่",
  },
  subtitleFile: {
    en: "Subtitle File",
    zh: "字幕文件",
    th: "ไฟล์คำบรรยาย",
  },
  subtitleFormat: {
    en: "Subtitle Format",
    zh: "字幕格式",
    th: "รูปแบบคำบรรยาย",
  },
  subtitleLanguage: {
    en: "Subtitle Language",
    zh: "字幕语言",
    th: "ภาษาคำบรรยาย",
  },

  // Income Records page
  incomeRecords: {
    en: "Income Records",
    zh: "收入记录",
    th: "บันทึกรายได้",
  },
  incomeRecordsDescription: {
    en: "View and manage all income records",
    zh: "查看和管理所有收入记录",
    th: "ดูและจัดการบันทึกรายได้ทั้งหมด",
  },
  rechargeRecords: {
    en: "Recharge Records",
    zh: "充值记录",
    th: "บันทึกการเติมเงิน",
  },
  vipPurchaseRecords: {
    en: "VIP Purchase Records",
    zh: "购买VIP记录",
    th: "บันทึกการซื้อ VIP",
  },
  agentQualificationRecords: {
    en: "Agent Qualification Records",
    zh: "购买代理资格记录",
    th: "บันทึกคุณสมบัติตัวแทน",
  },
  exportReport: {
    en: "Export Report",
    zh: "导出报告",
    th: "ส่งออกรายงาน",
  },
  malaysiaSite: {
    en: "Malaysia Site",
    zh: "马来西亚分站",
    th: "ไซต์มาเลเซีย",
  },
  myanmarSite: {
    en: "Myanmar Site",
    zh: "缅甸分站",
    th: "ไซต์พม่า",
  },
  laosSite: {
    en: "Laos Site",
    zh: "老挝分站",
    th: "ไซต์ลาว",
  },
  thailandSite: {
    en: "Thailand Site",
    zh: "泰国分站",
    th: "ไซต์ประเทศไทย",
  },
  searchRecords: {
    en: "Search records...",
    zh: "搜索记录...",
    th: "ค้นหาบันทึก...",
  },
  paymentMethod: {
    en: "Payment Method",
    zh: "支付方式",
    th: "วิธีการชำระเงิน",
  },
  allMethods: {
    en: "All Methods",
    zh: "所有方式",
    th: "ทุกวิธี",
  },
  creditCard: {
    en: "Credit Card",
    zh: "信用卡",
    th: "บัตรเครดิต",
  },
  bankTransfer: {
    en: "Bank Transfer",
    zh: "银行转账",
    th: "การโอนเงินผ่านธนาคาร",
  },
  mobilePayment: {
    en: "Mobile Payment",
    zh: "移动支付",
    th: "การชำระเงินผ่านมือถือ",
  },
  date: {
    en: "Date",
    zh: "日期",
    th: "วันที่",
  },
  userId: {
    en: "User ID",
    zh: "用户ID",
    th: "รหัสผู้ใช้",
  },
  username: {
    en: "Username",
    zh: "用户名",
    th: "ชื่อผู้ใช้",
  },
  vipPlan: {
    en: "VIP Plan",
    zh: "VIP套餐",
    th: "แผน VIP",
  },
  allPlans: {
    en: "All Plans",
    zh: "所有套餐",
    th: "ทุกแผน",
  },
  monthlyPlan: {
    en: "Monthly Plan",
    zh: "月度套餐",
    th: "แผนรายเดือน",
  },
  quarterlyPlan: {
    en: "Quarterly Plan",
    zh: "季度套餐",
    th: "แผนรายไตรมาส",
  },
  annualPlan: {
    en: "Annual Plan",
    zh: "年度套餐",
    th: "แผนรายปี",
  },
  startDate: {
    en: "Start Date",
    zh: "开始日期",
    th: "วันที่เริ่มต้น",
  },
  endDate: {
    en: "End Date",
    zh: "结束日期",
    th: "วันที่สิ้นสุด",
  },
  agentLevel: {
    en: "Agent Level",
    zh: "代理等级",
    th: "ระดับตัวแทน",
  },
  allLevels: {
    en: "All Levels",
    zh: "所有等级",
    th: "ทุกระดับ",
  },
  silverAgent: {
    en: "Silver Agent",
    zh: "银牌代理",
    th: "ตัวแทนระดับเงิน",
  },
  goldAgent: {
    en: "Gold Agent",
    zh: "金牌代理",
    th: "ตัวแทนระดับทอง",
  },
  platinumAgent: {
    en: "Platinum Agent",
    zh: "白金代理",
    th: "ตัวแทนระดับแพลตินัม",
  },
  purchaseDate: {
    en: "Purchase Date",
    zh: "购买日期",
    th: "วันที่ซื้อ",
  },
  expiryDate: {
    en: "Expiry Date",
    zh: "到期日期",
    th: "วันหมดอายุ",
  },
  
  // Agent Management page
  agentManagement: {
    en: "Agent Management",
    zh: "代理商管理",
    th: "การจัดการตัวแทน",
  },
  addNewAgent: {
    en: "Add New Agent",
    zh: "添加新代理商",
    th: "เพิ่มตัวแทนใหม่",
  },
  agentsList: {
    en: "Agents List",
    zh: "代理商列表",
    th: "รายชื่อตัวแทน",
  },
  commissionRecords: {
    en: "Commission Records",
    zh: "代理商分成记录",
    th: "บันทึกค่าคอมมิชชั่น",
  },
  commissionReports: {
    en: "Commission Reports",
    zh: "代理商分成报表",
    th: "รายงานค่าคอมมิชชั่น",
  },
  manageAgents: {
    en: "Manage all agents and their commissions",
    zh: "管理所有代理商及其佣金",
    th: "จัดการตัวแทนทั้งหมดและค่าคอมมิชชั่นของพวกเขา",
  },
  searchAgents: {
    en: "Search agents...",
    zh: "搜索代理商...",
    th: "ค้นหาตัวแทน...",
  },
  joinDate: {
    en: "Join Date",
    zh: "加入日期",
    th: "วันที่เข้าร่วม",
  },
  referrals: {
    en: "Referrals",
    zh: "推荐人数",
    th: "การแนะนำ",
  },
  totalCommission: {
    en: "Total Commission",
    zh: "总佣金",
    th: "ค่าคอมมิชชั่นทั้งหมด",
  },
  viewReferrals: {
    en: "View Referrals",
    zh: "查看推荐",
    th: "ดูการแนะนำ",
  },
  viewCommissions: {
    en: "View Commissions",
    zh: "查看佣金",
    th: "ดูค่าคอมมิชชั่น",
  },
  editAgent: {
    en: "Edit Agent",
    zh: "编辑代理商",
    th: "แก้ไขตัวแทน",
  },
  changeStatus: {
    en: "Change Status",
    zh: "更改状态",
    th: "เปลี่ยนสถานะ",
  },
  agentCommissionHistory: {
    en: "Agent commission history and records",
    zh: "代理商佣金历史和记录",
    th: "ประวัติและบันทึกค่าคอมมิชชั่นของตัวแทน",
  },
  searchCommissions: {
    en: "Search commissions...",
    zh: "搜索佣金记录...",
    th: "ค้นหาค่าคอมมิชชั่น...",
  },
  commissionType: {
    en: "Commission Type",
    zh: "佣金类型",
    th: "ประเภทค่าคอมมิชชั่น",
  },
  allTypes: {
    en: "All Types",
    zh: "所有类型",
    th: "ทุกประเภท",
  },
  vipPurchase: {
    en: "VIP Purchase",
    zh: "VIP购买",
    th: "การซื้อ VIP",
  },
  recharge: {
    en: "Recharge",
    zh: "充值",
    th: "การเติมเงิน",
  },
  agentQualification: {
    en: "Agent Qualification",
    zh: "代理资格",
    th: "คุณสมบัติตัวแทน",
  },
  exportCommissions: {
    en: "Export Commissions",
    zh: "导出佣金记录",
    th: "ส่งออกค่าคอมมิชชั่น",
  },
  agentId: {
    en: "Agent ID",
    zh: "代理商ID",
    th: "รหัสตัวแทน",
  },
  agentName: {
    en: "Agent Name",
    zh: "代理商名称",
    th: "ชื่อตัวแทน",
  },
  referralId: {
    en: "Referral ID",
    zh: "推荐人ID",
    th: "รหัสการแนะนำ",
  },
  referralName: {
    en: "Referral Name",
    zh: "推荐人名称",
    th: "ชื่อการแนะนำ",
  },
  agentCommissionAnalytics: {
    en: "Agent commission analytics and reports",
    zh: "代理商佣金分析和报表",
    th: "การวิเคราะห์และรายงานค่าคอมมิชชั่นของตัวแทน",
  },
  timeRange: {
    en: "Time Range",
    zh: "时间范围",
    th: "ช่วงเวลา",
  },
  last30Days: {
    en: "Last 30 Days",
    zh: "最近30天",
    th: "30 วันที่ผ่านมา",
  },
  last3Months: {
    en: "Last 3 Months",
    zh: "最近3个月",
    th: "3 เดือนที่ผ่านมา",
  },
  last6Months: {
    en: "Last 6 Months",
    zh: "最近6个月",
    th: "6 เดือนที่ผ่านมา",
  },
  lastYear: {
    en: "Last Year",
    zh: "最近一年",
    th: "ปีที่ผ่านมา",
  },
  downloadReport: {
    en: "Download Report",
    zh: "下载报表",
    th: "ดาวน์โหลดรายงาน",
  },
  monthlyCommissions: {
    en: "Monthly Commissions",
    zh: "月度佣金",
    th: "ค่าคอมมิชชั่นรายเดือน",
  },
  agentDistribution: {
    en: "Agent Distribution",
    zh: "代理商分布",
    th: "การกระจายตัวของตัวแทน",
  },
  silverAgents: {
    en: "Silver Agents",
    zh: "银牌代理商",
    th: "ตัวแทนระดับเงิน",
  },
  goldAgents: {
    en: "Gold Agents",
    zh: "金牌代理商",
    th: "ตัวแทนระดับทอง",
  },
  platinumAgents: {
    en: "Platinum Agents",
    zh: "白金代理商",
    th: "ตัวแทนระดับแพลตินัม",
  },
  topPerformingAgents: {
    en: "Top Performing Agents",
    zh: "表现最佳代理商",
    th: "ตัวแทนที่มีประสิทธิภาพสูงสุด",
  },
  rank: {
    en: "Rank",
    zh: "排名",
    th: "อันดับ",
  },
  available: {
    en: "Available",
    zh: "可用",
    th: "พร้อมใช้งาน",
  },
  notAvailable: {
    en: "Not Available",
    zh: "不可用",
    th: "ไม่พร้อมใช้งาน",
  },
  name: {
    en: "Name",
    zh: "姓名",
    th: "ชื่อ",
  },
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    // Try to get the locale from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && ["en", "zh", "th"].includes(savedLocale)) {
      setLocale(savedLocale)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "zh") setLocale("zh")
      else if (browserLang === "th") setLocale("th")
      // Default to English for other languages
    }
  }, [])

  useEffect(() => {
    // Save locale to localStorage when it changes
    localStorage.setItem("locale", locale)
  }, [locale])

  const t = (key: string): string => {
    const keys = key.split(".")
    let current = translations

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) return key
      current = current[keys[i]] as unknown as Translations
    }

    const lastKey = keys[keys.length - 1]
    if (current[lastKey] && current[lastKey][locale]) {
      return current[lastKey][locale]
    }

    return key
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
