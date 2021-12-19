/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Kodi Documentation", "index.html", [
    [ "Introduction", "index.html", [
      [ "What is Kodi?", "index.html#doxy_whatisxbmc", null ]
    ] ],
    [ "Code Guidelines", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html", [
      [ "Table of Contents", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md1", null ],
      [ "1. Motivation", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md2", null ],
      [ "2. Language standard", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md3", null ],
      [ "3. Formatting", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md4", [
        [ "Line length", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md5", null ],
        [ "3.1. Braces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md6", null ],
        [ "3.2. Indentation", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md7", null ],
        [ "3.3. Control statements", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md8", [
          [ "3.3.1. if else", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md9", null ],
          [ "3.3.2. switch case", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md10", null ],
          [ "3.3.3. try catch", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md11", null ]
        ] ],
        [ "3.4. Whitespace", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md12", null ],
        [ "3.5. Vertical alignment", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md13", null ],
        [ "3.6. Superfluous <tt>void</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md14", null ],
        [ "3.7. Exceptions to the Formatting Rules For Better Readability", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md15", null ]
      ] ],
      [ "4. Statements", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md16", [
        [ "4.1. Multiple statements", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md17", null ],
        [ "4.2. <tt>switch</tt> default case", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md18", null ]
      ] ],
      [ "5. Declarations", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md19", [
        [ "5.1. Multiple declarations", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md20", null ],
        [ "5.2. Pointer and reference types", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md21", null ],
        [ "5.3. <tt>const</tt> and other modifiers", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md22", null ],
        [ "5.4. Initialization", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md23", null ]
      ] ],
      [ "6. Scoping", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md24", [
        [ "6.1. Namespaces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md25", null ],
        [ "6.2. Local functions", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md26", null ]
      ] ],
      [ "7. Headers", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md27", null ],
      [ "8. Naming", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md28", [
        [ "8.1. Namespaces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md29", null ],
        [ "8.2. Constants", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md30", null ],
        [ "8.3. Enums", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md31", null ],
        [ "8.4. Interfaces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md32", null ],
        [ "8.5. Classes", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md33", null ],
        [ "8.6. Methods", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md34", null ],
        [ "8.7. Variables", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md35", [
          [ "Member variables", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md36", null ],
          [ "Global variables", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md37", null ]
        ] ]
      ] ],
      [ "9. Comments", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md38", [
        [ "9.1. General", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md39", null ],
        [ "9.2. Doxygen", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md40", null ]
      ] ],
      [ "10. Logging", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md41", null ],
      [ "11. Classes", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md42", [
        [ "11.1. Member visibility", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md43", null ],
        [ "11.2. Const correctness", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md44", null ],
        [ "11.3. Overriding virtual functions", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md45", null ],
        [ "11.4. Default member initialization", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md46", null ],
        [ "11.5. Destructors in interfaces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md47", null ],
        [ "11.6. Constructor Initialization Lists", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md48", null ]
      ] ],
      [ "12. Other conventions", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md49", [
        [ "12.1. Output parameters", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md50", null ],
        [ "12.2. Casts", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md51", null ],
        [ "12.3. <tt>NULL</tt> vs <tt>nullptr</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md52", null ],
        [ "12.4. <tt>auto</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md53", null ],
        [ "12.5. <tt>for</tt> loops", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md54", null ],
        [ "12.6. Include guards", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md55", null ],
        [ "12.7. Type aliases", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md56", null ],
        [ "12.8. <tt>goto</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md57", null ],
        [ "12.9. Macros", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md58", null ],
        [ "12.10. <tt>constexpr</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md59", null ]
      ] ]
    ] ],
    [ "General", "d5/dd9/general.html", "d5/dd9/general" ],
    [ "Revisions", "d7/d9a/revisions.html", "d7/d9a/revisions" ],
    [ "General Development parts", "da/dc1/general_parts.html", "da/dc1/general_parts" ],
    [ "Skin Development", "da/de7/skin_parts.html", "da/de7/skin_parts" ],
    [ "Bug List", "de/da5/bug.html", null ],
    [ "Todo List", "dd/da0/todo.html", null ],
    [ "Deprecated List", "da/d58/deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Properties", "functions_prop.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", "globals_enum" ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d0/d19/_d_v_d_overlay_8h.html#aa668e95470a4a1904232acffb91bb3e2ac3c3e967a42abf4a47890c155edb45a0",
"d0/d20/class_p_e_r_i_p_h_e_r_a_l_s_1_1_c_peripheral_cec_adapter.html#a04e140951a8f253b7077f595e6788052",
"d0/d33/class_active_a_e_1_1_i_a_e_resample.html#a0aa94f702e724dc4ece6e7244bca56ab",
"d0/d41/class_k_o_d_i_1_1_g_a_m_e_1_1_c_g_u_i_configuration_wizard.html#a04c583985e78e34d509375761c4e4a30",
"d0/d4c/group__cpp__kodi__gui___defs__action__ids.html#gga62be855be162fe7ce2ceaf15fcb53a4aa1453f257bfa357c26eeabd7d64ab2efa",
"d0/d4c/group__cpp__kodi__gui___defs__action__ids.html#gga62be855be162fe7ce2ceaf15fcb53a4aa9bf047e440c1b6ca83d76b7613c32f3c",
"d0/d53/class_p_v_r_1_1_c_p_v_r_epg.html#a350b1ac162bf21bc54a7366fce7e28a3",
"d0/d61/class_k_o_d_i_1_1_i_n_p_u_t_1_1_c_button_stat.html#ae63d31a61522fe7c7914ef7846d19d75",
"d0/d74/class_c_g_u_i_base_container.html#a4a69eda920b15af8ced593ea268613bb",
"d0/d7f/class_active_a_e_1_1_c_sync_error.html#a5dec44523badf89a5a62ad6b6116caa9",
"d0/d7f/class_m_u_s_i_c___i_n_f_o_1_1_c_music_info_tag.html#a82c506d9bc7069ff165479364d26f8e2",
"d0/d80/class_p_e_r_i_p_h_e_r_a_l_s_1_1_c_peripherals.html#a6420126f7c7ebc869bfd3805f2c9c5c5",
"d0/d94/class_k_o_d_i_1_1_g_u_i_l_i_b_1_1_g_u_i_i_n_f_o_1_1_c_player_g_u_i_info.html#aea6b36c33ab44c4328290f0bb850a31f",
"d0/da1/_x_b_m_c__keysym_8h.html#ad8fee7c9d36f0b9630de13ebbcfabe0aa7bd16bad85d04902e500f836aae23341",
"d0/da4/class_d_x_v_a_1_1_c_processor_h_d.html#a50405409a79ea03641d13a5e841a920d",
"d0/db0/group__cpp__kodi__audioengine___c_a_e_stream.html",
"d0/dc4/_g_u_i_user_messages_8h.html#a8a8a0a1527610da40d594a1790832568",
"d0/dd7/_g_u_i_message_8h.html#aa30dfbbe285bdeb8532baa759276958c",
"d0/de8/class_c_g_u_i_font_t_t_f_g_l.html",
"d0/df5/ifo__types_8h.html#a1d96390efcb57cb07900bb048a4de458",
"d1/d03/struct_h_t_t_p_request.html#a385a58e01766dd54a3a3d396c8bd6229",
"d1/d19/class_m_u_s_i_c___i_n_f_o_1_1_c_music_info_tag_loader_f_fmpeg.html#a74aff2ef79f043b3de09a786a7276928",
"d1/d30/class_c_g_u_i_keyboard.html#aba94820d4fca54f0b87022bff7287dc4",
"d1/d3e/class_c_app_param_parser.html",
"d1/d48/class_v_d_p_a_u_1_1_c_vdpau_buffer_pool.html#a8b4379d7bff0d9bc6d8b3ce75745b813",
"d1/d52/class_a_d_d_o_n_1_1_c_scraper.html#a7cb54d7b01691d3584623aa4f474011d",
"d1/d64/class_o_v_e_r_l_a_y_1_1_c_overlay_text.html#a64e3170767dbbd6e538b8b397eefafce",
"d1/d75/class_p_l_a_y_l_i_s_t_1_1_c_play_list_player.html#a855a9deb1ca10890747ba3f876ae50e9",
"d1/d7f/class_c_setting_category_access_condition_combination.html#af607bc2a06dd8663d29089a1ac699e6b",
"d1/d8f/class_a_d_d_o_n_1_1_c_g_u_i_addon_window.html#a44211e70e88cf4ac119c0295e7570d8f",
"d1/d9f/class_p_v_r_1_1_c_g_u_i_window_p_v_r_guide_base.html#a1b970ed7433cafaf4c9e7ac3113e90f0",
"d1/dab/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_savestate_database.html#a2c6bd9a11dc6a753c399f4951cb9aa13",
"d1/db9/class_p_v_r_1_1_c_p_v_r_timers.html#a93b6548e894f6d2b58bb71d395f2da01",
"d1/dcd/class_e_v_e_n_t_c_l_i_e_n_t_1_1_c_event_client.html#a4ce97fa6b7d04431899d280045bf51ec",
"d1/de8/class_o_v_e_r_l_a_y_1_1_c_overlay_image_d_x.html#a9c667458a87d21657b21f4563eda31d8",
"d2/d05/_input_coding_table_8h.html",
"d2/d12/struct_x_b_m_c___event.html#ad6ab72f6d61791b97d7a11f5032ac5bc",
"d2/d21/group__cpp__kodi__gui__windows__controls___c_radio_button.html#gaffa66a247339b7647748a18fa832a5cf",
"d2/d2b/coff_8h.html#a0624c0a85ba33ba2d5784d70b899ab65",
"d2/d2f/class_c_album.html#ac39ee984dcb3e4e034d2b2b9504cffb0",
"d2/d3e/class_p_v_r_1_1_c_p_v_r_radio_r_d_s_info_tag.html#abfc5e540bd5ab6717a4da0dd15e99692",
"d2/d54/_direct_x_graphics_8h.html#a97758f071a0ee76379873a4f65ed9685",
"d2/d5a/class_c_win_system_o_s_x.html#aed8506073d09367d3dc38d1ec542a5c8",
"d2/d64/class_a_d_d_o_n_1_1_i_addon.html#a926d3a8d05b2354f9e0d2dc6ec070165",
"d2/d6b/classdbiplus_1_1_mysql_dataset.html#a4da95420885230efa0d65a10a91463cd",
"d2/d76/class_a_d_d_o_n_1_1_c_skin_setting_bool.html#abe34074d372c3a96c6694ac296aa80a5",
"d2/d89/_savestate_flat_buffer_8cpp.html",
"d2/d9d/_linux_renderer_g_l_8h.html#a5fe24eb8283305ce3b9a1b3eb7866460a2cd5814876ae9cf1bce08f904d71e4c8",
"d2/dab/class_k_o_d_i_1_1_g_a_m_e_1_1_c_g_u_i_window_games.html#a34e0b4384f4b361254b2bc15c8d09168",
"d2/db6/class_a_d_d_o_n_1_1_c_addon_settings.html#ac81394da97b9003e01818da8a84f430e",
"d2/dca/class_v_i_d_e_o_p_l_a_y_e_r_1_1_c_process_info_wayland.html#af28d4b840b64fb4e3ada3925c76cff30",
"d2/dd0/class_c_g_u_i_window.html#a82024e06f99cb533763f85ee1a1c3a7d",
"d2/de0/class_p_l_a_y_l_i_s_t_1_1_c_play_list_x_m_l.html#a28a1b3ca9b99a473f0104470e7b99a3b",
"d2/df9/class_c_renderer_v_d_p_a_u.html#ad6df01c0d884c70c3085203f16d3b3a0",
"d3/d0f/cc__decoder708_8cpp.html#ae5949d784f73fe6bbf1abec5fb10f63c",
"d3/d18/class_c_g_u_i_dialog_file_browser.html#a0015153927e9b5300b30489a46f82ab2",
"d3/d25/class_c_song.html#a9e2ddb04b0172976d0439c5b1d3af7a2",
"d3/d45/class_c_g_u_i_dialog_content_settings.html#a28bb5ff91d21469e7a1cc205ee9028bb",
"d3/d4d/class_x_f_i_l_e_1_1_c_curl_file_1_1_c_read_state.html#a62452aa2b16566e6df11d5386ac1994a",
"d3/d50/classdbiplus_1_1_database.html#ae815493b52b58ec3cd031b51718c75be",
"d3/d5e/classkodi_1_1addon_1_1_p_v_r_timers_result_set.html",
"d3/d72/class_v_d_p_a_u_1_1_c_output.html#a89baf94e399518e2c2b9ddd05c3fa8ba",
"d3/d88/class_k_o_d_i_1_1_g_u_i_l_i_b_1_1_g_u_i_i_n_f_o_1_1_c_g_u_i_info_bool.html",
"d3/d92/class_shaders_1_1_base_y_u_v2_r_g_b_g_l_s_l_shader.html#ac79f21277557468d7e258a527a29c8b0",
"d3/da0/dvdnav_8h.html#a6b1841dca782ad0a26dfbaadaf664900",
"d3/db0/class_c_g_u_i_dialog_addon_settings.html#acf39416b4a2216502335381235b16db3",
"d3/dc7/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_g_u_i_playback_control.html",
"d3/dd4/class_k_o_d_i_1_1_g_a_m_e_1_1_c_controller_port_node.html#a8d7697ede0fd2ef18f9179d2e45d48df",
"d3/de7/_stream_info_8h.html#a54ee75b35b7a1b418f92d6f2f1b89d9d",
"d3/df9/_scraper_8h.html#a9f5f084db962d47cfd18de99129571a7a19555bfdddf98faa3dcb5bbd86027fe1",
"d4/d06/_test_utils_8h.html#a839f4e7ad6cee26647729fd447fed02d",
"d4/d0e/posix_2_platform_defs_8h.html#a26769957ec1a2beaf223f33b66ee64ab",
"d4/d21/class_c_current_stream.html#a1b06091216f03f9ae7cc68cfe69d6aba",
"d4/d32/_p_v_r_timer_info_tag_8cpp.html",
"d4/d4e/_g_u_i_texture_8h.html#a347297a0adb0c1959bc35e51fa00dc97",
"d4/d5f/class_p_v_r_1_1_c_p_v_r_channel_groups.html#a5d78d76389b27e1d34b8a167cdec4ff8",
"d4/d71/class_p_v_r_1_1_c_p_v_r_channel_number.html#a3f97034772fa5fb515b5d4a96bcd844c",
"d4/d8d/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_win_render_buffer.html",
"d4/d9b/class_k_o_d_i_1_1_r_e_t_r_o_1_1_i_savestate.html#aa8e02a139100af771f4244d8fa37b531",
"d4/db1/_seat_input_processing_8h.html",
"d4/dc3/class_p_v_r_1_1_c_g_u_i_e_p_g_grid_container_model.html#a6de8a34d68546b187c2b9a51bf38a7a6",
"d4/dd4/group__cpp__kodi__addon__pvr___defs___timer___p_v_r_timer_type.html#ga5f5be9281bedc842630ae744b7b99f80",
"d4/de6/class_c_g_u_i_message.html#acfa2f43a9f6e7acb48c6caf39563c746",
"d4/dfd/group__cpp__kodi__tools___c_thread.html#ga612388972281e05fa5650a4340aa1019",
"d5/d05/struct_a_t_t_r_i_b_u_t_e___p_a_c_k_e_d.html#a4f5fcff5b9773ab8d2c8a1d91cba099f",
"d5/d05/struct_a_t_t_r_i_b_u_t_e___p_a_c_k_e_d.html#af9dad1786f0e9ea380c6cc1945b2c528",
"d5/d15/class_c_renderer_base.html#ab9eccf6d7ef3e2fbfd40d6c4cb8cb3ff",
"d5/d2f/class_p_v_r_1_1_c_g_u_i_dialog_p_v_r_timer_settings.html#a992a5c42201732bec380c7bbe4cbae44",
"d5/d38/class_x_b_m_c_addon_1_1_addon_class_1_1_ref.html#aacc53735f1f08f2ae10449cb7b42ca3a",
"d5/d43/class_c_input_stream_p_v_r_recording.html#a46390a1427f40dad1f4ffe6fb101b136",
"d5/d59/class_x_f_i_l_e_1_1_c_music_file_directory.html#a94ece3e8d1b4adf2107d2cc8ac453a64",
"d5/d72/_database_utils_8h.html#a1e35064f4b70226adc63b8fe1af7ddf8a440924abae47bdebe11f3d8a44f09c45",
"d5/d7a/class_i_player.html#abe9f32dcff4ac1c744db4158532aa5f5",
"d5/d8b/_shell_surface_8cpp.html",
"d5/d9f/_setting_conditions_8cpp.html#af24b57ee4ce6a39f0c4fbabaab76850b",
"d5/db9/struct_____r_a_w___r_e_a_d___i_n_f_o.html#ac132875424cf018603a7454472fb26e7",
"d5/dd5/class_c_g_u_i_dialog_media_source.html#a9cc766e25398d81ca8590a748bfb0519",
"d5/de7/struct_p_v_r___c_h_a_n_n_e_l___g_r_o_u_p___m_e_m_b_e_r.html#aaa5b32296c44e31d6b2c4ea31173b66f",
"d5/dfe/class_x_b_m_c_addon_1_1_tuple_3_01_t1_00_01tuple__null__type_00_01tuple__null__type_00_01tuple__8a9080a020395ccdfb4e1277d8e1c2c5.html#a3bca936d985b8fcced7bca0ef1cc4d40",
"d6/d06/class_c_input_manager.html#a52b86fe3732281cdde48260cdd78c882",
"d6/d08/class_active_a_e_1_1_c_active_a_e_stream.html#aa939649e9efc815e79a9563161c4f9a8",
"d6/d15/class_p_e_r_i_p_h_e_r_a_l_s_1_1_c_peripheral_bus_addon.html#a282abc6cac8e882f6a4806280bad07a4",
"d6/d2b/struct_c_linux_renderer_g_l_1_1_c_yuv_plane.html#a9119eaba157827c78a99830ad3ba6a79",
"d6/d3a/group__cpp__kodi__addon__peripheral___defs___joystick___j_o_y_s_t_i_c_k___d_r_i_v_e_r___h_a_t___d_i_r_e_c_t_i_o_n.html",
"d6/d4d/_addon_dll_8cpp.html",
"d6/d58/class_k_o_d_i_1_1_g_a_m_e_1_1_c_game_info_tag.html#a23808f108ffe4e20ca32c0d014b9c519",
"d6/d66/struct_kodi_to_addon_func_table___screensaver.html#a594626b75e04c30948a44d47f7a04a51",
"d6/d72/decoder_8h.html#a8b7a26fbb41fa2cb8921629b48386384a04efa989925cfbd5aaa4d6ff4d5c94da",
"d6/d80/class_c_process_info.html#a0c1f999c23fa3892009b5c8e3f162a3d",
"d6/d88/class_x_b_m_c_addon_1_1xbmcgui_1_1_window_x_m_l.html#a425d218a8d217a1ea74c4b9cb61878da",
"d6/d96/struct_video_picture.html#a42c575be95cc7c8979c849a85201aed3",
"d6/dac/group__cpp__kodi__addon__videocodec___defs.html#gga04d2d16cda11704bd44448cee4a8de0badbf26bff027ee33db7ee786d642aeeb4",
"d6/dc6/class_c_filesystem_installer.html",
"d6/de1/classjni_1_1_c_j_n_i_x_b_m_c_json_handler_1_1_c_j_n_i_transport_layer.html#a24859424b5abba46f8537d26bcda2336",
"d6/de9/_u_i_sounds_resource_8h.html",
"d6/df7/_platform_linux_8cpp.html",
"d7/d04/class_c_g_u_i_label_control.html#a74702ac09646637003d1fc1b86a0f30c",
"d7/d0e/class_a_d_d_o_n_1_1_c_addon_mgr.html#aae351d4217d1057b3cbe9bb88fabc316",
"d7/d18/class_a_d_d_o_n_1_1_c_addon.html#a0439f315d153539d24846eb55a4977af",
"d7/d20/namespace_x_f_i_l_e_1_1_v_i_d_e_o_d_a_t_a_b_a_s_e_d_i_r_e_c_t_o_r_y.html#ac107beae0aa1d1314f33e80282234bc0aad57046d08c4e7bc1b6873faa5c7517b",
"d7/d3d/class_x_f_i_l_e_1_1_v_i_d_e_o_d_a_t_a_b_a_s_e_d_i_r_e_c_t_o_r_y_1_1_c_directory_node_music_videos_overview.html#ad5f29464fc32e5883b3c69cc2687df26",
"d7/d4a/class_active_a_e_1_1_c_active_a_e_sink.html#ada9d222dbf133cce3efa8a363908786f",
"d7/d58/_x_b_m_c__vkeys_8h.html#aaa0eebc2574d301d8c94de72f248868da19e2edf4547d726ff2e620e20be924f1",
"d7/d62/classmass__waiter.html",
"d7/d7e/group__cpp__kodi__addon__peripheral___defs___joystick___j_o_y_s_t_i_c_k___d_r_i_v_e_r___m_o_u_s_e___i_n_d_e_x.html#gga3f9475f72dcbfec3547d7bb4fc740018a0777361f524051fa092d2c82c2896e7e",
"d7/d95/class_c_d_v_d_video_codec_f_fmpeg.html#af54e983eb1ee712a34a1d08738e267b6",
"d7/da9/dirent_8h.html#afef163ce62372757e84bd9fc88c07aad",
"d7/dba/class_v_a_a_p_i_1_1_c_decoder.html#aaca70a0b56f8d024b8508cf1cd3316b0",
"d7/dc8/class_xbmc_commons_1_1_buffer.html#a71ce8d081aa4f6bab222ecb67fbe990d",
"d7/dd2/class_c_g_u_i_window_file_manager.html#a796a7fd0d4c960b3eb968399ecd79e41",
"d7/ddd/class_input_stream_multi_streams.html#a1eafa53cdad8270c886190f2b9d110dd",
"d7/deb/class_c_music_database.html#a2f0a4e855a824d6c4b849cd00084daad",
"d7/df3/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_w_a_y_l_a_n_d_1_1_i_shell_surface.html#a16da574f7c8b542527e660fd32a3170d",
"d7/dfc/_key_8h.html#ae733c361d1fbdd7257eae95f421824da",
"d8/d02/struct_a_d_d_o_n_1_1_s_ext_value.html#aeb5f1da92429707fb49298f7bd17154e",
"d8/d13/classdbiplus_1_1_mysql_database.html#aabbcdbca80ddb6a90bb2455df7382ca8",
"d8/d19/namespace_k_o_d_i_1_1_g_u_i_l_i_b_1_1_g_u_i_i_n_f_o.html",
"d8/d26/cdio_support_8h.html#a251104e627eb0ef9a0430b4ac279e58c",
"d8/d28/class_c_builtins.html",
"d8/d30/class_k_o_d_i_1_1_g_a_m_e_1_1_c_g_u_i_dialog_button_capture.html#a08bdb0167a4f5e94296870f7b393c838",
"d8/d3a/_g_u_i_dialog_context_menu_8h.html#afb30685d263bde222bfce51d536dfae4a54cc5a97a6af59577a6817fa837b7feb",
"d8/d4e/struct_g_u_i_view_sort_details.html#a1c1131f88e9bfa2f3415d743b9ec11c7",
"d8/d63/class_c_matrix_g_l.html#afe2df3ce7917f200639bbf50dbe1db19",
"d8/d6f/class_c_g_u_i_dialog_volume_bar.html#a2201a154ff7263d78a01e285d8a8a64a",
"d8/d7a/class_c_video_database.html#a4d34e70eccf48cd4d3dc0e46dc6b2f9b",
"d8/d7b/class_x_f_i_l_e_1_1_c_curl_file.html#a7f2d771cf6927b1b40ccfe7d9bb2a625",
"d8/d83/namespace_a_d_d_o_n.html#a1a390ee6b4c238d4419c906132c0b174a5c6f4227801a582f7a93093f38e815a7",
"d8/d8c/class_p_v_r_1_1_c_p_v_r_recording.html#a1c37d06a4b149f1a57af629048a8cb76",
"d8/d9a/class_dll_loader.html#a26291bc52f76bfda46fab97d686a7eeb",
"d8/da4/class_c_video_player.html#aaf50a3b0f41d79566d7eed702d85fca5",
"d8/db1/struct_d_e_b_u_g___i_n_f_o___v_i_d_e_o.html",
"d8/dbd/class_c_g_u_i_window_full_screen.html#a934d720e2c717935bb8ec055ec95d430",
"d8/dc8/_directory_node_in_progress_tv_shows_8cpp.html",
"d8/ddd/class_v_d_p_a_u_1_1_c_mixer.html#ac1e90778c6c2c8b70cdbf4102dc9f640",
"d8/df6/class_active_a_e_1_1_c_active_a_e.html#a168a637eb414ba2aaff4abcb8a88d2c0",
"d8/df9/struct_o_v_e_r_s_c_a_n.html",
"d9/d05/structgame__stream__packet.html#a9849a2cc7f101712579101af6262e827",
"d9/d17/class_c_h_t_t_p_image_transformation_handler.html#ac9bc66888914837845c3813dcb664208",
"d9/d1c/_video_database_8h.html#af36def8b2d28fc6e596892653d13f353a095c6dd0c56bbc3302bd409dc1b631b6",
"d9/d27/struct_text_cache_struct__t.html#abff7be4d4380e81195cd28728db4c5a2",
"d9/d2e/group__kodi__key__action__ids.html#ga5388e26af7708db0730143077368acaf",
"d9/d2e/group__kodi__key__action__ids.html#gae28c3c742f88ee515aa34f7cc453679c",
"d9/d3f/group__cpp__kodi__addon__inputstream___defs___stream_encryption___s_t_r_e_a_m___c_r_y_p_t_o___k_e_y___s_y_s_t_e_m.html#gga2841619bf1cafeb89c05f394bf2a4074ac2cfa51d363c326ea07b5f81ec773ac7",
"d9/d4f/class_c_g_u_i_control.html#a71ee7c84bf0cd694bc6898b9479166f2a65c1749a82b735fd9ab085cd899c16f9",
"d9/d56/structsps__info__struct.html#adf9bad5fabdd1ef7a6d4d886b37dba1f",
"d9/d67/emu__msvcrt_8h.html#a9b0fab6d33c25c220705e1352dabf001",
"d9/d7f/route_8h.html",
"d9/d90/_window_i_ds_8h.html#a517cdc5b6edcbbce2fbccf85a2dd6f88",
"d9/d93/group__cpp__kodi__addon__pvr___defs__epg___e_p_g___e_v_e_n_t.html#gga5a32817d058b385d6a5ac777cd9d7396a4a216e805699dfccd87151ea5af6309b",
"d9/da3/_application_8h.html",
"d9/db6/class_e_v_e_n_t_c_l_i_e_n_t_1_1_c_event_action.html",
"d9/dc2/class_u_p_n_p_1_1_c_media_controller.html#ab1e15a401721e860b98e5445e4e4ad82",
"d9/dcb/class_p_v_r_1_1_c_p_v_r_channel.html#a33fd4cd63760de3f2832112ecd3b914e",
"d9/dd3/class_test_web_server.html#a7633e600365ac34724183476a2a04b1e",
"d9/de9/_p_v_r_recordings_path_8cpp.html",
"da/d02/class_d_x_v_a_1_1_c_video_buffer_copy.html",
"da/d12/class_x_b_python.html#a764c1e6fb87611c8e4ae50b9b29e9bc0",
"da/d22/class_x_f_i_l_e_1_1_pipes_manager.html#a415586967eb568f05e37fd34e1edd07b",
"da/d2f/class_p_v_r_1_1_c_p_v_r_g_u_i_actions.html#a8fb6edd66426c519b260a8f448477cc3",
"da/d3f/dxerr_8cpp.html#aeee3ade601ea7533a4c87caeb98647f1",
"da/d4e/class_c_a_e_sink_d_a_r_w_i_n_i_o_s.html#a656e81f84005a546d4c12978f3f47cf1",
"da/d5d/class_a_d_d_o_n_1_1_c_addon_info.html#a6ce9f7fd1ec301767f90662226fbe246",
"da/d6a/class_m_u_s_i_c___i_n_f_o_1_1_c_music_info_scanner.html",
"da/d7f/platform_2win32_2peripherals_2_peripheral_bus_u_s_b_8h.html",
"da/d93/_render_flags_8h.html#addcd2b3048dd8590565a8566e63ed8fc",
"da/d9c/struct_active_a_e_1_1_audio_settings.html#a2a70661c6b615a72898f8bbf9a0c2685",
"da/da9/namespace_x_f_i_l_e_1_1_m_u_s_i_c_d_a_t_a_b_a_s_e_d_i_r_e_c_t_o_r_y.html#a83aaa5c3e3ba5bc4fc6b28ef81e59e4cabf41e720638b90984ac34078abcab7cb",
"da/db4/class_k_o_d_i_1_1_m_e_s_s_a_g_i_n_g_1_1_c_application_messenger.html#a46095e7092ff9e8a72aca9c0f947c858",
"da/dc7/struct_k_o_d_i_1_1_r_e_t_r_o_1_1_video_stream_packet.html#ad066d673efa43fd77e9d13a4196d1472",
"da/dd7/class_c_video_info_tag.html#a3968b6c96d97015bcf98cb7f975b7faf",
"da/ddf/class_a_d_d_o_n_1_1_addon_version.html#a69aadb9cd86ab2cda4f47f7bfddb2e19",
"da/de9/class_p_v_r_1_1_c_p_v_r_timer_info_tag.html#a984680cd770a76f4862efb87d0150040",
"da/df6/classdbiplus_1_1_dataset.html#a3cde990979dea48f6f956726db609af4",
"da/dfb/class_c_media_settings.html#a38ef8abfa1722332fa90c6dc84a55504",
"db/d12/class_shaders_1_1_convolution_filter_shader.html#a7996dd448ec44ef1afc5f02473250b8d",
"db/d2e/class_c_graphic_context.html#a11bbe45e044b35cbd2de6d24a1accff9",
"db/d30/class_p_e_r_i_p_h_e_r_a_l_s_1_1_c_peripheral.html#ad3fbb0f081f90c3f4f17ed0cf3ace3f2",
"db/d44/class_c_settings_value_flat_json_serializer.html#a8f4844810b107936c225b1a6760bfeea",
"db/d55/_application_messenger_8h.html#ae6a61bea3113e8809ba3f1133d92b146",
"db/d65/class_c_d_v_d_overlay_spu.html#adba97a1137ffe8223e54085b4b0f1e19",
"db/d82/group__cpp__kodi__addon__inputstream___defs___interface___inputstream_info.html#ga4ebb44a05e43e810f40802617c37bbbf",
"db/d92/class_x_f_i_l_e_1_1_c_win32_s_m_b_directory.html#aff14b861cafca28c3a16be5ef5b0728a",
"db/d9c/_g_u_i_dialog_settings_base_8h.html#afa2c02c54c20bce6576eaab4f3023cf7",
"db/da5/utils_2_string_utils_8h.html#abac94fc838ce9a6141333812c8639dc3",
"db/dab/cc__decoder708_8h.html#aceeb6221777780c983ebb2460fa3805baee90c28ac36549873d03151899eeda59",
"db/dbe/class_c_g_u_i_window_settings_category.html#a237ff0307ca44427408d030d945d13d9",
"db/dcc/class_p_e_r_i_p_h_e_r_a_l_s_1_1_c_peripheral_bus.html#a11542cf657a883f4230946b7d60585b7",
"db/dd5/class_v_d_p_a_u_1_1_c_output_control_protocol.html#ac9f5c54f3728fa2ff0a665e695bd0265add2959aa8e5f60d654830bc120e2ae5b",
"db/de0/class_c_texture_cache.html",
"db/df2/_g_u_i_info_labels_8h.html#a080cdce427f48886abc736cd363ba0f4",
"db/df2/_g_u_i_info_labels_8h.html#a547fdc9e4c40081275a12b2bf100cb78",
"db/df2/_g_u_i_info_labels_8h.html#aa42bcab90028ad606712d23e6e5aaaca",
"db/df2/_g_u_i_info_labels_8h.html#ae45501dabca4c49028cf73d566f43741",
"db/df8/group__cpp__kodi__audioengine___defs___audio_engine_stream_options.html#ga1aa49c29eb7936bce8423178894d0018",
"dc/d01/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_g_b_m_1_1_c_d_r_m_utils.html#a9a918a497dd514ff6dccee7b9687a6e3",
"dc/d0c/struct_v_i_d_e_o_1_1_e_p_i_s_o_d_e.html#a027a4c7427e31b6952f1b74cbbf0d8f2",
"dc/d18/_directory_node_song_top100_8h.html",
"dc/d3b/class_c_g_u_i_dialog_video_bookmarks.html#a715007133566ba8a208b50e148d756b7",
"dc/d52/namespace_x_f_i_l_e.html#aa9f18ff61aa05c4f2528b7a75284719da731feaec0a920b3cf0279be4cb71118d",
"dc/d66/class_p_v_r_1_1_c_p_v_r_client.html#a6ec975e5e9f65b3d613dbbb2c69c13b7",
"dc/d6e/classdbiplus_1_1result__set.html#acf2fa372d6edb24e937aa21bfb64f066",
"dc/d83/class_shaders_1_1_g_l_s_l_output.html#a6f90eac86309ddff1db16a10a1389e84",
"dc/d9d/class_c_texture.html#aaf8d1c3a48fc56c6ca8db3d686ad5faa",
"dc/db4/class_c_g_u_i_dialog_music_info.html#a42b240ec353406da94f9cd4f0136ac40",
"dc/dc4/namespace_p_v_r.html#a491bfc063fa08912207a0a062f5f0f30a693d25e4989beffe31236a8a7fb1c5e7",
"dc/dd3/class_c_d_v_d_demux_f_fmpeg.html#a6427b9e85b36c154414000aad149e4a8",
"dc/de8/struct_o_v_e_r_l_a_y_1_1_c_renderer_1_1_s_element.html#a43928f9dfc5cff9f584d437229297fe2",
"dd/d01/class_p_v_r_1_1_c_p_v_r_clients.html#a6174c4217fe91c858ee228dbbb4fb000",
"dd/d12/class_c_g_u_i_window_manager.html#a5dfec45e0321487d3afdcd044019c52b",
"dd/d23/class_c_g_u_i_window_video_playlist.html#a4352d184a642dfa27d090844f887cafe",
"dd/d36/class_c_bitstream_converter.html#af5570d61c7cc3e1d52fe0ca6c0df994e",
"dd/d45/class_x_f_i_l_e_1_1_v_i_d_e_o_d_a_t_a_b_a_s_e_d_i_r_e_c_t_o_r_y_1_1_c_directory_node_grouped.html#a89b1b87893a4bcd7b82dfad697df0827",
"dd/d58/class_p_v_r_1_1_c_p_v_r_epg_tags_cache.html#ade291bf3df0bc7273a771600f9e41b8c",
"dd/d74/class_c_setting_requirement.html",
"dd/d8c/class_p_v_r_1_1_c_p_v_r_manager.html#a58720751d0c60d319488d52cefc51058",
"dd/d98/_setting_definitions_8h.html#a51c9f52da6f1299ea69af13a0e8728d1ae3b696a985a033844e72d1664977684c",
"dd/dac/_network_win10_8cpp.html#a6ca326051909e893dcb008967f22a1b5",
"dd/dc4/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_g_b_m_1_1_c_d_r_m_object.html#a20581a65717bb2eb648ca9c33d2fa5fd",
"dd/dd8/group__cpp__kodi__addon__pvr___defs___timer___p_v_r_timer.html#ga87ec4840947fe148fa8ce2507c1a8d41",
"dd/deb/class_c_game_settings.html#ae81d3fb73d7dc8e5a0f67c9a60f793c5",
"dd/df8/class_i_database_query_rule_factory.html#aa1fa69c24bc6335f4002478e9a01a472",
"de/d0e/class_p_v_r_1_1_c_p_v_r_epg_channel_data.html#af9ce49dfcd30decab7b1591e9313f823",
"de/d20/class_p_v_r_1_1_c_g_u_i_window_p_v_r_recordings_base.html#ae2f84748df9e8847c89b790f6fed34b2",
"de/d2d/class_p_e_r_i_p_h_e_r_a_l_s_1_1_c_addon_button_map.html#aa646f3d6c3b48097bb82fd323d0a1550",
"de/d42/class_c_audio_buffer.html#a102b4f2831d924a1c528969eba4255e0",
"de/d5f/class_x_f_i_l_e_1_1_v_i_d_e_o_d_a_t_a_b_a_s_e_d_i_r_e_c_t_o_r_y_1_1_c_directory_node_recently_added_music_videos.html#a5cd56cc06ff30520e969d2293859fba0",
"de/d74/group__cpp__kodi__addon__pvr___defs___stream___p_v_r_stream_times.html#ga172a6a199657797e44bfffdb282fd3f8",
"de/d87/class_c_d_v_d_stream_info.html#ae697181907aed91dad12b50e7373680b",
"de/d93/_test_zip_manager_8cpp.html#a7cc91f794e35b090aba2b361cfd22592",
"de/da0/addons_2kodi-dev-kit_2include_2kodi_2gui_2gl_2_shader_8h.html",
"de/dad/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_x11_1_1_c_video_sync_g_l_x.html#a8bb93661696fc2615320a494c69b64e9",
"de/dbf/class_c_g_u_i_window_music_nav.html#a42b9ab4bdfeade9d5baa0d8e7af086d8",
"de/dd5/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_g_b_m_1_1_c_win_system_gbm_g_l_e_s_context.html#acc8d7b744674fbd1837bfff8859c696d",
"de/de7/interface_t_v_o_s_lib_input_touch.html#a674e8a487dbc182fd5f73fbd6eb90fdc",
"df/d01/class_c_a_e_encoder_f_fmpeg.html#aaf42d3f8c16fcd1bcb400af972930a4c",
"df/d13/class_c_application.html#a1281e6dd4961592bf6f034d532dde44e",
"df/d19/wrapper_8c.html#a2929d6aa4d37a861399cc76ae539882b",
"df/d28/class_c_media_source.html#ae9ebb5201c726d607ebd580074c4d973",
"df/d2b/class_c_advanced_settings.html#adca4a20995a4ac8299a96d5cbe21666b",
"df/d3a/class_c_profile_manager.html#ad73fe75edf881a254d5559e25bd4b722",
"df/d4d/class_c_u_r_l.html#a0521a3ad3a60bd973dee446c84680d72",
"df/d5c/structgame__analog__stick__event.html#af1514615f1c08602f3d2d8ab00efd67c",
"df/d6b/class_i_render_msg.html#ae369b9d10ff010b3ad691d0f0e4efaeb",
"df/d78/_system_8h.html#a9bbcd82e77c41df827c09759def05c9a",
"df/d7d/class_p_v_r_1_1_c_p_v_r_g_u_i_progress_handler.html#a19b4557b37c99b1bde1524306879f4cd",
"df/d8d/struct_kodi_to_addon_func_table___input_stream.html#a18ae77c6282a631a27d46271635d2c16",
"df/d92/struct_d_s_device.html#a18164f21d9bf5e4b32bebb38ec3847e5",
"df/da1/struct_s_m_c_key_data__p_limit_data__t.html#af42c12a01561a9666c89aae33d823f72",
"df/dbd/class_p_v_r_1_1_c_p_v_r_epg_container.html#a0bc0ffe528524d11284f5deda0aca438",
"df/dc6/class_p_v_r_1_1_c_p_v_r_client_capabilities.html#ae75b3baf500bddc2bc396fe71a8bdbf9",
"df/dd6/class_p_v_r_1_1_c_p_v_r_database.html#af29f4bee107658281e45afbf6a90d7fc",
"df/de2/class_v_i_d_e_o_1_1_c_video_info_scanner.html#a3f7ea41dc2aabfebd4cfe5dabe7d6a5d",
"df/def/_renderer_base_8h.html#a5fe24eb8283305ce3b9a1b3eb7866460a4041beca36191cfe7ce6f2c898799937",
"df/dfa/class_k_o_d_i_1_1_g_a_m_e_1_1_c_dialog_game_stretch_mode.html#abe64311f41023d68e32858fb5a9533bb",
"globals_enum_v.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';