(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("5b217030-d983-4024-98c8-2baf00c7f524");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5b217030-d983-4024-98c8-2baf00c7f524' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"40e0b6ce-014b-440a-ab6d-271da4438b1f":{"roots":{"references":[{"attributes":{},"id":"b6bfbf30-54ab-4a57-984b-8f0f1189e0a0","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a76a8798-6c7b-44a4-a2e9-4022dffc1dd6","type":"BoxAnnotation"},{"attributes":{},"id":"7b357ef3-b777-417a-92ec-a4ec15181e16","type":"SaveTool"},{"attributes":{"callback":null},"id":"134dfca5-7f01-48e5-acba-554c3b9a051f","type":"DataRange1d"},{"attributes":{"source":{"id":"9a940a4e-cdc8-4e71-8a87-2f5e72a1dfa5","type":"ColumnDataSource"}},"id":"981c4c4f-ea71-46ad-afe7-409e11b7fe8d","type":"CDSView"},{"attributes":{"formatter":{"id":"319070f8-7068-4ac1-83f3-473df56680f0","type":"BasicTickFormatter"},"plot":{"id":"acf637be-2a77-4232-b113-4dd644b1b66f","subtype":"Figure","type":"Plot"},"ticker":{"id":"088fb37b-5873-4175-a863-a18038b2d311","type":"BasicTicker"}},"id":"573e5eaf-90f0-4967-8bbf-f95d5adbb70c","type":"LinearAxis"},{"attributes":{},"id":"3d75208a-1e33-4dc5-b3e1-b3fe8b31cb64","type":"PanTool"},{"attributes":{},"id":"9f43d647-fe42-4022-a6aa-3d75277bb045","type":"ResetTool"},{"attributes":{},"id":"0ef7d132-b099-4442-95eb-c68fcc3e59fd","type":"BasicTickFormatter"},{"attributes":{},"id":"915d378f-4acb-4987-92e6-03fe6d1b7f41","type":"LinearScale"},{"attributes":{"callback":null},"id":"4a702182-97e4-4a4f-8b03-fe30d84b6ebd","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9a940a4e-cdc8-4e71-8a87-2f5e72a1dfa5","type":"ColumnDataSource"},"glyph":{"id":"3cfb10cc-0e01-4382-bea1-43f7d38b53ed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57ff255b-49aa-4afb-a46a-c9974985c7a8","type":"Circle"},"selection_glyph":null,"view":{"id":"981c4c4f-ea71-46ad-afe7-409e11b7fe8d","type":"CDSView"}},"id":"b24c8e54-9c1b-43a5-a46f-8559b40c2c1b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ba5edb0b-c034-4500-877a-f9adc998d280","type":"BasicTickFormatter"},"plot":{"id":"acf637be-2a77-4232-b113-4dd644b1b66f","subtype":"Figure","type":"Plot"},"ticker":{"id":"24a98093-4210-4840-9137-db2ff2504bb6","type":"BasicTicker"}},"id":"6b9700ba-263a-4a86-ba0c-913e563516bc","type":"LinearAxis"},{"attributes":{},"id":"721d7fed-f906-4c04-b624-4e4852312c74","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"f62c5851-441b-4b60-8db2-c19c85f77d85","subtype":"Figure","type":"Plot"},"ticker":{"id":"309342f1-33e3-47c0-a7d7-7893ec181572","type":"BasicTicker"}},"id":"37142e42-c234-49cd-b278-47183ae88fd8","type":"Grid"},{"attributes":{"formatter":{"id":"31dcd55f-dc35-495c-8243-9613aad2a003","type":"BasicTickFormatter"},"plot":{"id":"f62c5851-441b-4b60-8db2-c19c85f77d85","subtype":"Figure","type":"Plot"},"ticker":{"id":"93951f8d-4b0b-4956-83e7-b9d5c31f20a3","type":"BasicTicker"}},"id":"3f468daf-6482-4f7e-be54-3c059134eb2f","type":"LinearAxis"},{"attributes":{},"id":"50a2d702-02aa-46fc-8f71-c34eefb5bd01","type":"SaveTool"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"3d75208a-1e33-4dc5-b3e1-b3fe8b31cb64","type":"PanTool"},{"id":"3aac2be6-fc1b-416a-9d21-59dfe0f3f290","type":"WheelZoomTool"},{"id":"3117f460-d484-4b29-b404-461d9e4823f3","type":"BoxZoomTool"},{"id":"50a2d702-02aa-46fc-8f71-c34eefb5bd01","type":"SaveTool"},{"id":"be03cc63-ef21-450d-8478-5f15426c8fab","type":"ResetTool"},{"id":"b6bfbf30-54ab-4a57-984b-8f0f1189e0a0","type":"HelpTool"},{"id":"bb8474f7-8072-4a27-a238-409f9028328d","type":"PanTool"},{"id":"cbc5118b-2e19-4800-9f5e-82dfb1b9291b","type":"WheelZoomTool"},{"id":"7aad7d5f-5a39-47a1-a259-5ba2e0ca488e","type":"BoxZoomTool"},{"id":"7b357ef3-b777-417a-92ec-a4ec15181e16","type":"SaveTool"},{"id":"9f43d647-fe42-4022-a6aa-3d75277bb045","type":"ResetTool"},{"id":"3990440d-b5d9-4f0a-b729-1d3d41441720","type":"HelpTool"},{"id":"a84eddba-5a72-4cef-9613-ea5bc2d9a406","type":"PanTool"},{"id":"721d7fed-f906-4c04-b624-4e4852312c74","type":"WheelZoomTool"},{"id":"a781b265-aec0-49ef-bda4-b0bb86a93521","type":"BoxZoomTool"},{"id":"f8751f96-68b0-4191-ad52-928df5be9965","type":"SaveTool"},{"id":"b5dc5665-186c-4cdb-8893-e94dafef1d6e","type":"ResetTool"},{"id":"bc0347da-fe62-4b66-81eb-0288d84d27c0","type":"HelpTool"}]},"id":"58dfb89b-5a18-4f12-9d4b-855ee78bee8e","type":"ToolbarBox"},{"attributes":{"children":[{"id":"f62c5851-441b-4b60-8db2-c19c85f77d85","subtype":"Figure","type":"Plot"},{"id":"acf637be-2a77-4232-b113-4dd644b1b66f","subtype":"Figure","type":"Plot"}]},"id":"49dbc78c-b50f-429f-a19e-419a2c7cbe93","type":"Row"},{"attributes":{},"id":"24a98093-4210-4840-9137-db2ff2504bb6","type":"BasicTicker"},{"attributes":{"children":[{"id":"58dfb89b-5a18-4f12-9d4b-855ee78bee8e","type":"ToolbarBox"},{"id":"08b6be96-bc74-4181-8861-1e50b3d735dd","type":"Column"}]},"id":"b6f7d4dc-f019-4c05-bddb-fb5336ba8a94","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a84eddba-5a72-4cef-9613-ea5bc2d9a406","type":"PanTool"},{"id":"721d7fed-f906-4c04-b624-4e4852312c74","type":"WheelZoomTool"},{"id":"a781b265-aec0-49ef-bda4-b0bb86a93521","type":"BoxZoomTool"},{"id":"f8751f96-68b0-4191-ad52-928df5be9965","type":"SaveTool"},{"id":"b5dc5665-186c-4cdb-8893-e94dafef1d6e","type":"ResetTool"},{"id":"bc0347da-fe62-4b66-81eb-0288d84d27c0","type":"HelpTool"}]},"id":"c79dcc8e-c064-4451-9789-0cdddf43def2","type":"Toolbar"},{"attributes":{"data_source":{"id":"1a4fea1b-deb1-433b-8311-e7ea73f8ab5f","type":"ColumnDataSource"},"glyph":{"id":"e0d8c704-f7cb-485c-8a2b-57ab85987cd0","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96737a55-1d58-4725-afcd-622cccd793dd","type":"Square"},"selection_glyph":null,"view":{"id":"5f983966-ae68-4e5b-b6fa-44d49d57f36b","type":"CDSView"}},"id":"4d2538d3-774c-4e0e-ba25-90a8398962d5","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"4bc8af15-9e29-4848-9977-28e6327556a3","type":"Spacer"},{"id":"25b06e09-bf75-43aa-a8a4-8d29442962c7","subtype":"Figure","type":"Plot"}]},"id":"78c90a20-4ecc-41d4-ac6e-f080ce4330bb","type":"Row"},{"attributes":{},"id":"b5dc5665-186c-4cdb-8893-e94dafef1d6e","type":"ResetTool"},{"attributes":{},"id":"3990440d-b5d9-4f0a-b729-1d3d41441720","type":"HelpTool"},{"attributes":{},"id":"b877160a-f3d5-4d5b-bf8e-051fba6c9fb0","type":"LinearScale"},{"attributes":{"plot":{"id":"f62c5851-441b-4b60-8db2-c19c85f77d85","subtype":"Figure","type":"Plot"},"ticker":{"id":"93951f8d-4b0b-4956-83e7-b9d5c31f20a3","type":"BasicTicker"}},"id":"980f913d-e7b6-4e60-862f-c5cc7f6695c4","type":"Grid"},{"attributes":{},"id":"92117821-a1a5-478a-a0f8-5ef28420965e","type":"LinearScale"},{"attributes":{"callback":null},"id":"9e9a4d9c-9ba2-43b7-9b82-0b2046b34f29","type":"DataRange1d"},{"attributes":{},"id":"be03cc63-ef21-450d-8478-5f15426c8fab","type":"ResetTool"},{"attributes":{},"id":"d0631c08-cbd0-4b1f-abaa-472f879a41e0","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"25b06e09-bf75-43aa-a8a4-8d29442962c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c11e77ac-23c1-4a43-bb9c-6f9e6ad6e663","type":"BasicTicker"}},"id":"7c0877cf-cbec-43df-996a-626af75a2b1e","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f451dfdc-a677-4bde-84ff-66e4056bd976","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb8508e5-e1a6-437f-99e6-2c7072ad2b3a","type":"Triangle"},{"attributes":{},"id":"fdbc7dba-80a2-4c3e-a74a-5c0e9d9bc5f7","type":"BasicTickFormatter"},{"attributes":{},"id":"bb8474f7-8072-4a27-a238-409f9028328d","type":"PanTool"},{"attributes":{"height":250,"width":250},"id":"4bc8af15-9e29-4848-9977-28e6327556a3","type":"Spacer"},{"attributes":{"callback":null},"id":"ecc19a7f-6ec4-4b1d-a7e6-f2bd3ae150e3","type":"DataRange1d"},{"attributes":{},"id":"3ca2fb76-1962-4504-866e-f01015d304d1","type":"LinearScale"},{"attributes":{"callback":null},"id":"388a4674-c4a3-4612-9130-4df0534e0875","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a607ea30-debd-4f6d-948c-e8d122ebc9d1","type":"Triangle"},{"attributes":{},"id":"4fad656b-478a-4dd6-a45d-f6e3ee93de93","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bb8474f7-8072-4a27-a238-409f9028328d","type":"PanTool"},{"id":"cbc5118b-2e19-4800-9f5e-82dfb1b9291b","type":"WheelZoomTool"},{"id":"7aad7d5f-5a39-47a1-a259-5ba2e0ca488e","type":"BoxZoomTool"},{"id":"7b357ef3-b777-417a-92ec-a4ec15181e16","type":"SaveTool"},{"id":"9f43d647-fe42-4022-a6aa-3d75277bb045","type":"ResetTool"},{"id":"3990440d-b5d9-4f0a-b729-1d3d41441720","type":"HelpTool"}]},"id":"f575989e-8c3d-4581-a36c-adb8f6ab7289","type":"Toolbar"},{"attributes":{"below":[{"id":"33078577-aed9-470e-8c38-4ae20a664d3b","type":"LinearAxis"}],"left":[{"id":"1f5ea115-656b-4da3-82fc-fd3c2992cd4d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"33078577-aed9-470e-8c38-4ae20a664d3b","type":"LinearAxis"},{"id":"48e7307e-b37f-4e73-9107-d71df6ab780c","type":"Grid"},{"id":"1f5ea115-656b-4da3-82fc-fd3c2992cd4d","type":"LinearAxis"},{"id":"7c0877cf-cbec-43df-996a-626af75a2b1e","type":"Grid"},{"id":"f451dfdc-a677-4bde-84ff-66e4056bd976","type":"BoxAnnotation"},{"id":"4d2538d3-774c-4e0e-ba25-90a8398962d5","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"c79dcc8e-c064-4451-9789-0cdddf43def2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9e9a4d9c-9ba2-43b7-9b82-0b2046b34f29","type":"DataRange1d"},"x_scale":{"id":"b877160a-f3d5-4d5b-bf8e-051fba6c9fb0","type":"LinearScale"},"y_range":{"id":"cc45adaa-719d-4abd-aa3e-c6ae85db34db","type":"DataRange1d"},"y_scale":{"id":"3ca2fb76-1962-4504-866e-f01015d304d1","type":"LinearScale"}},"id":"25b06e09-bf75-43aa-a8a4-8d29442962c7","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3d75208a-1e33-4dc5-b3e1-b3fe8b31cb64","type":"PanTool"},{"id":"3aac2be6-fc1b-416a-9d21-59dfe0f3f290","type":"WheelZoomTool"},{"id":"3117f460-d484-4b29-b404-461d9e4823f3","type":"BoxZoomTool"},{"id":"50a2d702-02aa-46fc-8f71-c34eefb5bd01","type":"SaveTool"},{"id":"be03cc63-ef21-450d-8478-5f15426c8fab","type":"ResetTool"},{"id":"b6bfbf30-54ab-4a57-984b-8f0f1189e0a0","type":"HelpTool"}]},"id":"8ab8371f-f682-4ef4-8ae7-5e14ef96529d","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3cfb10cc-0e01-4382-bea1-43f7d38b53ed","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"96737a55-1d58-4725-afcd-622cccd793dd","type":"Square"},{"attributes":{"data_source":{"id":"52555779-e194-4bcf-aa0a-fd1bcdc959ab","type":"ColumnDataSource"},"glyph":{"id":"a607ea30-debd-4f6d-948c-e8d122ebc9d1","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb8508e5-e1a6-437f-99e6-2c7072ad2b3a","type":"Triangle"},"selection_glyph":null,"view":{"id":"24bf32b8-ec90-4203-96f2-15907ed7752b","type":"CDSView"}},"id":"5aaf0d46-8bcf-441f-90cd-a2e6f4b36d8b","type":"GlyphRenderer"},{"attributes":{},"id":"c11e77ac-23c1-4a43-bb9c-6f9e6ad6e663","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0ef7d132-b099-4442-95eb-c68fcc3e59fd","type":"BasicTickFormatter"},"plot":{"id":"25b06e09-bf75-43aa-a8a4-8d29442962c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fad656b-478a-4dd6-a45d-f6e3ee93de93","type":"BasicTicker"}},"id":"33078577-aed9-470e-8c38-4ae20a664d3b","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"1a4fea1b-deb1-433b-8311-e7ea73f8ab5f","type":"ColumnDataSource"},{"attributes":{},"id":"9e728a2c-a948-4412-9a69-8d3210696a84","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"52555779-e194-4bcf-aa0a-fd1bcdc959ab","type":"ColumnDataSource"},{"attributes":{},"id":"cbc5118b-2e19-4800-9f5e-82dfb1b9291b","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0d8c704-f7cb-485c-8a2b-57ab85987cd0","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"57ff255b-49aa-4afb-a46a-c9974985c7a8","type":"Circle"},{"attributes":{},"id":"319070f8-7068-4ac1-83f3-473df56680f0","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"710df2bf-088d-4352-a7dd-ac1150cf0a1c","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"573e5eaf-90f0-4967-8bbf-f95d5adbb70c","type":"LinearAxis"}],"left":[{"id":"6b9700ba-263a-4a86-ba0c-913e563516bc","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"573e5eaf-90f0-4967-8bbf-f95d5adbb70c","type":"LinearAxis"},{"id":"0916eeaa-4abd-428a-8dcb-2ad8be25f07c","type":"Grid"},{"id":"6b9700ba-263a-4a86-ba0c-913e563516bc","type":"LinearAxis"},{"id":"7e5b2615-35a1-420d-81f8-ddc41e8b4ea2","type":"Grid"},{"id":"710df2bf-088d-4352-a7dd-ac1150cf0a1c","type":"BoxAnnotation"},{"id":"5aaf0d46-8bcf-441f-90cd-a2e6f4b36d8b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f575989e-8c3d-4581-a36c-adb8f6ab7289","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"134dfca5-7f01-48e5-acba-554c3b9a051f","type":"DataRange1d"},"x_scale":{"id":"92117821-a1a5-478a-a0f8-5ef28420965e","type":"LinearScale"},"y_range":{"id":"388a4674-c4a3-4612-9130-4df0534e0875","type":"DataRange1d"},"y_scale":{"id":"9e728a2c-a948-4412-9a69-8d3210696a84","type":"LinearScale"}},"id":"acf637be-2a77-4232-b113-4dd644b1b66f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a84eddba-5a72-4cef-9613-ea5bc2d9a406","type":"PanTool"},{"attributes":{},"id":"f8751f96-68b0-4191-ad52-928df5be9965","type":"SaveTool"},{"attributes":{"below":[{"id":"3f468daf-6482-4f7e-be54-3c059134eb2f","type":"LinearAxis"}],"left":[{"id":"2ec41d8e-85c0-428b-a716-1563d9fadc2e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"3f468daf-6482-4f7e-be54-3c059134eb2f","type":"LinearAxis"},{"id":"980f913d-e7b6-4e60-862f-c5cc7f6695c4","type":"Grid"},{"id":"2ec41d8e-85c0-428b-a716-1563d9fadc2e","type":"LinearAxis"},{"id":"37142e42-c234-49cd-b278-47183ae88fd8","type":"Grid"},{"id":"a76a8798-6c7b-44a4-a2e9-4022dffc1dd6","type":"BoxAnnotation"},{"id":"b24c8e54-9c1b-43a5-a46f-8559b40c2c1b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8ab8371f-f682-4ef4-8ae7-5e14ef96529d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4a702182-97e4-4a4f-8b03-fe30d84b6ebd","type":"DataRange1d"},"x_scale":{"id":"915d378f-4acb-4987-92e6-03fe6d1b7f41","type":"LinearScale"},"y_range":{"id":"ecc19a7f-6ec4-4b1d-a7e6-f2bd3ae150e3","type":"DataRange1d"},"y_scale":{"id":"363b9069-1674-4d5f-ae8d-c7e6c8cafd2d","type":"LinearScale"}},"id":"f62c5851-441b-4b60-8db2-c19c85f77d85","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"d0631c08-cbd0-4b1f-abaa-472f879a41e0","type":"BasicTickFormatter"},"plot":{"id":"f62c5851-441b-4b60-8db2-c19c85f77d85","subtype":"Figure","type":"Plot"},"ticker":{"id":"309342f1-33e3-47c0-a7d7-7893ec181572","type":"BasicTicker"}},"id":"2ec41d8e-85c0-428b-a716-1563d9fadc2e","type":"LinearAxis"},{"attributes":{"plot":{"id":"25b06e09-bf75-43aa-a8a4-8d29442962c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fad656b-478a-4dd6-a45d-f6e3ee93de93","type":"BasicTicker"}},"id":"48e7307e-b37f-4e73-9107-d71df6ab780c","type":"Grid"},{"attributes":{"source":{"id":"52555779-e194-4bcf-aa0a-fd1bcdc959ab","type":"ColumnDataSource"}},"id":"24bf32b8-ec90-4203-96f2-15907ed7752b","type":"CDSView"},{"attributes":{"overlay":{"id":"710df2bf-088d-4352-a7dd-ac1150cf0a1c","type":"BoxAnnotation"}},"id":"7aad7d5f-5a39-47a1-a259-5ba2e0ca488e","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"f451dfdc-a677-4bde-84ff-66e4056bd976","type":"BoxAnnotation"}},"id":"a781b265-aec0-49ef-bda4-b0bb86a93521","type":"BoxZoomTool"},{"attributes":{},"id":"088fb37b-5873-4175-a863-a18038b2d311","type":"BasicTicker"},{"attributes":{},"id":"3aac2be6-fc1b-416a-9d21-59dfe0f3f290","type":"WheelZoomTool"},{"attributes":{},"id":"363b9069-1674-4d5f-ae8d-c7e6c8cafd2d","type":"LinearScale"},{"attributes":{"source":{"id":"1a4fea1b-deb1-433b-8311-e7ea73f8ab5f","type":"ColumnDataSource"}},"id":"5f983966-ae68-4e5b-b6fa-44d49d57f36b","type":"CDSView"},{"attributes":{"formatter":{"id":"fdbc7dba-80a2-4c3e-a74a-5c0e9d9bc5f7","type":"BasicTickFormatter"},"plot":{"id":"25b06e09-bf75-43aa-a8a4-8d29442962c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c11e77ac-23c1-4a43-bb9c-6f9e6ad6e663","type":"BasicTicker"}},"id":"1f5ea115-656b-4da3-82fc-fd3c2992cd4d","type":"LinearAxis"},{"attributes":{"overlay":{"id":"a76a8798-6c7b-44a4-a2e9-4022dffc1dd6","type":"BoxAnnotation"}},"id":"3117f460-d484-4b29-b404-461d9e4823f3","type":"BoxZoomTool"},{"attributes":{},"id":"ba5edb0b-c034-4500-877a-f9adc998d280","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"acf637be-2a77-4232-b113-4dd644b1b66f","subtype":"Figure","type":"Plot"},"ticker":{"id":"088fb37b-5873-4175-a863-a18038b2d311","type":"BasicTicker"}},"id":"0916eeaa-4abd-428a-8dcb-2ad8be25f07c","type":"Grid"},{"attributes":{},"id":"309342f1-33e3-47c0-a7d7-7893ec181572","type":"BasicTicker"},{"attributes":{"callback":null},"id":"cc45adaa-719d-4abd-aa3e-c6ae85db34db","type":"DataRange1d"},{"attributes":{},"id":"31dcd55f-dc35-495c-8243-9613aad2a003","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"49dbc78c-b50f-429f-a19e-419a2c7cbe93","type":"Row"},{"id":"78c90a20-4ecc-41d4-ac6e-f080ce4330bb","type":"Row"}]},"id":"08b6be96-bc74-4181-8861-1e50b3d735dd","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"acf637be-2a77-4232-b113-4dd644b1b66f","subtype":"Figure","type":"Plot"},"ticker":{"id":"24a98093-4210-4840-9137-db2ff2504bb6","type":"BasicTicker"}},"id":"7e5b2615-35a1-420d-81f8-ddc41e8b4ea2","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"9a940a4e-cdc8-4e71-8a87-2f5e72a1dfa5","type":"ColumnDataSource"},{"attributes":{},"id":"93951f8d-4b0b-4956-83e7-b9d5c31f20a3","type":"BasicTicker"},{"attributes":{},"id":"bc0347da-fe62-4b66-81eb-0288d84d27c0","type":"HelpTool"}],"root_ids":["b6f7d4dc-f019-4c05-bddb-fb5336ba8a94"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"40e0b6ce-014b-440a-ab6d-271da4438b1f","elementid":"5b217030-d983-4024-98c8-2baf00c7f524","modelid":"b6f7d4dc-f019-4c05-bddb-fb5336ba8a94"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
