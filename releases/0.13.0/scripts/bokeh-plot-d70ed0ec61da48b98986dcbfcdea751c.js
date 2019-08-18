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
      };var element = document.getElementById("e5546831-670a-4d1d-91c2-ce1a200a1b01");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e5546831-670a-4d1d-91c2-ce1a200a1b01' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"67381348-893b-4721-9dda-f2b7759a654d":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5b03e2d0-23ff-4bef-8020-733ab3001d5a","type":"PanTool"},{"id":"96f4fc0c-d8c6-4795-b134-055452d01416","type":"WheelZoomTool"},{"id":"5880976f-4564-4243-8592-afcffaf2b39d","type":"BoxZoomTool"},{"id":"22b6e0ce-6bfd-4728-996b-f3d701e4b80b","type":"SaveTool"},{"id":"cacdf357-45ab-41d8-b498-008c162f7a34","type":"ResetTool"},{"id":"6d40afd6-ca24-4313-9661-2864cef7320f","type":"HelpTool"}]},"id":"35bb9273-1743-4946-a9e0-7e947bc62c93","type":"Toolbar"},{"attributes":{"children":[{"id":"088163ed-3d58-4e0c-abf4-50c11620445d","subtype":"Figure","type":"Plot"}]},"id":"7123f057-f9ee-4cdf-9698-92da291aca2c","type":"Row"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9accb1eb-8fc8-4759-a391-72e0b6d986d4","type":"Triangle"},{"attributes":{},"id":"13f5ed1a-75dc-4a9c-911a-aacc62f4dba1","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"c1f4696a-a958-4804-8a09-ee895050b6b7","type":"Title"},{"attributes":{},"id":"5848f39c-0bb4-4def-b298-69013e9e57ca","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"dcfd47ea-3ea4-48f5-92cd-106e3b96ed37","type":"Title"},{"attributes":{},"id":"2d7c9c72-d477-47b1-b2b7-571f98c72d63","type":"LinearScale"},{"attributes":{},"id":"12cc3b32-7639-4bbf-8921-de3c72eb7daa","type":"HelpTool"},{"attributes":{"formatter":{"id":"5848f39c-0bb4-4def-b298-69013e9e57ca","type":"BasicTickFormatter"},"plot":{"id":"505768cf-9a19-4722-87ac-bcf9f7f67acd","subtype":"Figure","type":"Plot"},"ticker":{"id":"744cc887-6216-4b50-aa8f-30919e0efdd2","type":"BasicTicker"}},"id":"1758da58-03f0-4cdc-ade3-ec3a9f056027","type":"LinearAxis"},{"attributes":{},"id":"3f265754-5a0f-4f3d-bd3b-2874774aa821","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"19f13de3-1eb2-46b0-8d2a-a11b62b3e848","type":"DataRange1d"},{"attributes":{},"id":"7b9bae54-ce1e-4936-b997-4f0410f5c2a3","type":"PanTool"},{"attributes":{},"id":"af737c8a-a535-45aa-a065-2e7918bb5207","type":"LinearScale"},{"attributes":{},"id":"ca62198e-1274-4842-9513-104881159120","type":"UnionRenderers"},{"attributes":{},"id":"3c03a4bd-3e27-4cba-a2eb-99cfef032cf6","type":"BasicTicker"},{"attributes":{},"id":"8a192c0d-9201-414f-871a-42e5807cd685","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9fddab4-cc29-46c2-b56c-853868daff36","type":"Square"},{"attributes":{"children":[{"id":"f9cf182c-fc46-4560-b633-34b32ef7d5b1","type":"Row"},{"id":"7123f057-f9ee-4cdf-9698-92da291aca2c","type":"Row"}]},"id":"3b9e48fe-6bf0-4688-8869-4381729b2ac9","type":"Column"},{"attributes":{"callback":null},"id":"99045979-f105-4c03-84f0-5aaeecf26157","type":"DataRange1d"},{"attributes":{},"id":"f0fa2dda-72d2-4756-91b0-d6a0a55e2de2","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"3608a965-abca-4e43-9b27-e7eb63a2feef","type":"Selection"},"selection_policy":{"id":"20353ecd-f013-4411-b318-a53df1004077","type":"UnionRenderers"}},"id":"cb331b9d-a610-46ab-a201-ad3a78a95b93","type":"ColumnDataSource"},{"attributes":{},"id":"853fa701-932c-4cc0-a1aa-8e7560d28860","type":"BasicTicker"},{"attributes":{},"id":"20353ecd-f013-4411-b318-a53df1004077","type":"UnionRenderers"},{"attributes":{},"id":"3608a965-abca-4e43-9b27-e7eb63a2feef","type":"Selection"},{"attributes":{},"id":"1f13c926-03a3-478a-aa97-cebc79a0d0a2","type":"LinearScale"},{"attributes":{"callback":null},"id":"f0f6e0ab-7b85-4053-bb34-20008bf8e3b1","type":"DataRange1d"},{"attributes":{"source":{"id":"ebee8579-0ef1-4820-aa33-e459201746c8","type":"ColumnDataSource"}},"id":"608f1b73-ea08-49a6-a107-8e04a16fb862","type":"CDSView"},{"attributes":{"source":{"id":"cfda3f29-0d46-46cd-b366-ebd003e023f1","type":"ColumnDataSource"}},"id":"d3e9a569-ba09-4a0b-b81b-38579325e52b","type":"CDSView"},{"attributes":{"children":[{"id":"82bf73ea-9f3d-41f1-ae06-389cfcba3374","type":"ToolbarBox"},{"id":"3b9e48fe-6bf0-4688-8869-4381729b2ac9","type":"Column"}]},"id":"50748f6a-5440-4db5-8743-7901e2f3bba6","type":"Column"},{"attributes":{},"id":"9831ea67-2796-4ceb-b25a-aaa7220b296e","type":"BasicTickFormatter"},{"attributes":{},"id":"bf536258-b5be-4b6b-9d11-ba2eb7621a39","type":"LinearScale"},{"attributes":{"plot":{"id":"963b65b2-20fb-4a1f-a75e-d2f16ca41212","subtype":"Figure","type":"Plot"},"ticker":{"id":"eace1095-103e-4979-866a-d277347fdb35","type":"BasicTicker"}},"id":"388c8bd7-b437-4438-a394-e015b35e76bc","type":"Grid"},{"attributes":{},"id":"95a27c3b-299d-4dd7-a72f-a04c73499cab","type":"Selection"},{"attributes":{"below":[{"id":"937e9cbc-06c9-40a1-925e-58739b4aaa0d","type":"LinearAxis"}],"left":[{"id":"cda16f05-7900-462c-8b54-22b9e58d835a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"937e9cbc-06c9-40a1-925e-58739b4aaa0d","type":"LinearAxis"},{"id":"6bd01cc9-b218-46f8-b693-44f46e88f90f","type":"Grid"},{"id":"cda16f05-7900-462c-8b54-22b9e58d835a","type":"LinearAxis"},{"id":"d607a623-58b4-4e6a-9360-26f5a0151463","type":"Grid"},{"id":"a882f638-6616-4bd8-baf6-620afe0dadc9","type":"BoxAnnotation"},{"id":"8e320d26-4a1e-4d90-8bad-207349919735","type":"GlyphRenderer"}],"title":{"id":"90491d2e-9a5c-4605-8f6e-a64879e1c198","type":"Title"},"toolbar":{"id":"35bb9273-1743-4946-a9e0-7e947bc62c93","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19f13de3-1eb2-46b0-8d2a-a11b62b3e848","type":"DataRange1d"},"x_scale":{"id":"bf536258-b5be-4b6b-9d11-ba2eb7621a39","type":"LinearScale"},"y_range":{"id":"99045979-f105-4c03-84f0-5aaeecf26157","type":"DataRange1d"},"y_scale":{"id":"1f13c926-03a3-478a-aa97-cebc79a0d0a2","type":"LinearScale"}},"id":"088163ed-3d58-4e0c-abf4-50c11620445d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3cd3724d-8158-4739-a8b8-09da966b3b67","type":"BasicTickFormatter"},{"attributes":{},"id":"6d40afd6-ca24-4313-9661-2864cef7320f","type":"HelpTool"},{"attributes":{"formatter":{"id":"13f5ed1a-75dc-4a9c-911a-aacc62f4dba1","type":"BasicTickFormatter"},"plot":{"id":"505768cf-9a19-4722-87ac-bcf9f7f67acd","subtype":"Figure","type":"Plot"},"ticker":{"id":"853fa701-932c-4cc0-a1aa-8e7560d28860","type":"BasicTicker"}},"id":"be40f79c-405c-44f5-b4e6-de23b015855d","type":"LinearAxis"},{"attributes":{},"id":"5b03e2d0-23ff-4bef-8020-733ab3001d5a","type":"PanTool"},{"attributes":{"below":[{"id":"228b5696-7e6c-4eee-972d-11652aabc8e5","type":"LinearAxis"}],"left":[{"id":"69803276-7add-452f-81fa-5cf38c674721","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"228b5696-7e6c-4eee-972d-11652aabc8e5","type":"LinearAxis"},{"id":"388c8bd7-b437-4438-a394-e015b35e76bc","type":"Grid"},{"id":"69803276-7add-452f-81fa-5cf38c674721","type":"LinearAxis"},{"id":"5c1b7d5d-f09e-45c4-a914-0d695dda67b9","type":"Grid"},{"id":"523a3da9-1e9a-4e18-bab1-76492cc8310b","type":"BoxAnnotation"},{"id":"a163f2db-c20e-410d-ac52-488940ba5da7","type":"GlyphRenderer"}],"title":{"id":"dcfd47ea-3ea4-48f5-92cd-106e3b96ed37","type":"Title"},"toolbar":{"id":"f557e6c9-bfc4-4f81-ae6a-d6c4832a4a15","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22326f38-8c68-4f01-9c29-4305816e9f5b","type":"DataRange1d"},"x_scale":{"id":"af737c8a-a535-45aa-a065-2e7918bb5207","type":"LinearScale"},"y_range":{"id":"f0f6e0ab-7b85-4053-bb34-20008bf8e3b1","type":"DataRange1d"},"y_scale":{"id":"2d7c9c72-d477-47b1-b2b7-571f98c72d63","type":"LinearScale"}},"id":"963b65b2-20fb-4a1f-a75e-d2f16ca41212","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"cfda3f29-0d46-46cd-b366-ebd003e023f1","type":"ColumnDataSource"},"glyph":{"id":"9accb1eb-8fc8-4759-a391-72e0b6d986d4","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aba54c93-2cc6-43a5-ae83-972a5c2b35d5","type":"Triangle"},"selection_glyph":null,"view":{"id":"d3e9a569-ba09-4a0b-b81b-38579325e52b","type":"CDSView"}},"id":"10ab066d-15b9-408a-af11-1affb0d095cd","type":"GlyphRenderer"},{"attributes":{},"id":"91b96307-dcd6-4ba2-adc1-add7283d57ac","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"91b96307-dcd6-4ba2-adc1-add7283d57ac","type":"Selection"},"selection_policy":{"id":"ca62198e-1274-4842-9513-104881159120","type":"UnionRenderers"}},"id":"cfda3f29-0d46-46cd-b366-ebd003e023f1","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a882f638-6616-4bd8-baf6-620afe0dadc9","type":"BoxAnnotation"},{"attributes":{},"id":"744cc887-6216-4b50-aa8f-30919e0efdd2","type":"BasicTicker"},{"attributes":{},"id":"f145f567-fca4-416c-87f0-e4161a4f5003","type":"UnionRenderers"},{"attributes":{},"id":"cdf721d1-f0f7-48e7-846b-e6e2f70d550b","type":"HelpTool"},{"attributes":{"tools":[{"id":"30982d71-f1f5-4c37-a3d8-b416f158d6ae","type":"PanTool"},{"id":"1e38135a-bd7d-4be1-a55c-26a9c6b35090","type":"WheelZoomTool"},{"id":"b6d31a8f-8d80-4673-8fda-91a4b6371a19","type":"BoxZoomTool"},{"id":"8a192c0d-9201-414f-871a-42e5807cd685","type":"SaveTool"},{"id":"6e3f091b-ef19-40c4-8097-27894542c619","type":"ResetTool"},{"id":"12cc3b32-7639-4bbf-8921-de3c72eb7daa","type":"HelpTool"},{"id":"7b9bae54-ce1e-4936-b997-4f0410f5c2a3","type":"PanTool"},{"id":"1744f06a-002a-404a-9fad-213cf6a4460e","type":"WheelZoomTool"},{"id":"89a8b54a-5de7-4cad-a2f7-813a75bed868","type":"BoxZoomTool"},{"id":"c019b77d-550a-4268-8bfb-e48f37548e23","type":"SaveTool"},{"id":"876d2b34-2eb2-464a-b3c4-f4dd4c7fc931","type":"ResetTool"},{"id":"cdf721d1-f0f7-48e7-846b-e6e2f70d550b","type":"HelpTool"},{"id":"5b03e2d0-23ff-4bef-8020-733ab3001d5a","type":"PanTool"},{"id":"96f4fc0c-d8c6-4795-b134-055452d01416","type":"WheelZoomTool"},{"id":"5880976f-4564-4243-8592-afcffaf2b39d","type":"BoxZoomTool"},{"id":"22b6e0ce-6bfd-4728-996b-f3d701e4b80b","type":"SaveTool"},{"id":"cacdf357-45ab-41d8-b498-008c162f7a34","type":"ResetTool"},{"id":"6d40afd6-ca24-4313-9661-2864cef7320f","type":"HelpTool"}]},"id":"3a7515eb-64de-471e-99e3-3ec04775e9ae","type":"ProxyToolbar"},{"attributes":{"plot":{"id":"505768cf-9a19-4722-87ac-bcf9f7f67acd","subtype":"Figure","type":"Plot"},"ticker":{"id":"744cc887-6216-4b50-aa8f-30919e0efdd2","type":"BasicTicker"}},"id":"0f9d1fc3-4198-4a3e-a7b5-4316773bfa45","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"90491d2e-9a5c-4605-8f6e-a64879e1c198","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aba54c93-2cc6-43a5-ae83-972a5c2b35d5","type":"Triangle"},{"attributes":{"formatter":{"id":"9831ea67-2796-4ceb-b25a-aaa7220b296e","type":"BasicTickFormatter"},"plot":{"id":"963b65b2-20fb-4a1f-a75e-d2f16ca41212","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf6a9539-cee2-4b81-98a2-b770c4329abe","type":"BasicTicker"}},"id":"69803276-7add-452f-81fa-5cf38c674721","type":"LinearAxis"},{"attributes":{"data_source":{"id":"cb331b9d-a610-46ab-a201-ad3a78a95b93","type":"ColumnDataSource"},"glyph":{"id":"f008b4f2-d67d-447c-b918-74b08c2cdeed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2a441aa-fb23-4823-81ba-7df79d82d7a4","type":"Circle"},"selection_glyph":null,"view":{"id":"9bc0c971-faae-4723-b4c1-38278838ad37","type":"CDSView"}},"id":"a163f2db-c20e-410d-ac52-488940ba5da7","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3cd3724d-8158-4739-a8b8-09da966b3b67","type":"BasicTickFormatter"},"plot":{"id":"088163ed-3d58-4e0c-abf4-50c11620445d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3167aae-7ad1-4b02-958e-0586b3cef4b8","type":"BasicTicker"}},"id":"cda16f05-7900-462c-8b54-22b9e58d835a","type":"LinearAxis"},{"attributes":{},"id":"30982d71-f1f5-4c37-a3d8-b416f158d6ae","type":"PanTool"},{"attributes":{},"id":"22b6e0ce-6bfd-4728-996b-f3d701e4b80b","type":"SaveTool"},{"attributes":{},"id":"a20177a2-a332-4dc7-a8a5-14f5cc71fd11","type":"LinearScale"},{"attributes":{"toolbar":{"id":"3a7515eb-64de-471e-99e3-3ec04775e9ae","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"82bf73ea-9f3d-41f1-ae06-389cfcba3374","type":"ToolbarBox"},{"attributes":{"dimension":1,"plot":{"id":"963b65b2-20fb-4a1f-a75e-d2f16ca41212","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf6a9539-cee2-4b81-98a2-b770c4329abe","type":"BasicTicker"}},"id":"5c1b7d5d-f09e-45c4-a914-0d695dda67b9","type":"Grid"},{"attributes":{},"id":"c019b77d-550a-4268-8bfb-e48f37548e23","type":"SaveTool"},{"attributes":{"below":[{"id":"1758da58-03f0-4cdc-ade3-ec3a9f056027","type":"LinearAxis"}],"left":[{"id":"be40f79c-405c-44f5-b4e6-de23b015855d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1758da58-03f0-4cdc-ade3-ec3a9f056027","type":"LinearAxis"},{"id":"0f9d1fc3-4198-4a3e-a7b5-4316773bfa45","type":"Grid"},{"id":"be40f79c-405c-44f5-b4e6-de23b015855d","type":"LinearAxis"},{"id":"39877b3b-e4f4-4b0f-9da2-6aafcc8d19d3","type":"Grid"},{"id":"05837d5b-b3a0-42e3-841f-b434056727b7","type":"BoxAnnotation"},{"id":"10ab066d-15b9-408a-af11-1affb0d095cd","type":"GlyphRenderer"}],"title":{"id":"c1f4696a-a958-4804-8a09-ee895050b6b7","type":"Title"},"toolbar":{"id":"3e3b4f65-39b8-4eab-ac31-5b7096b1a133","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"01cbc14c-5551-4287-bf19-544abfcc516a","type":"DataRange1d"},"x_scale":{"id":"a20177a2-a332-4dc7-a8a5-14f5cc71fd11","type":"LinearScale"},"y_range":{"id":"57d3205c-8a46-41e2-a223-2476c59538ec","type":"DataRange1d"},"y_scale":{"id":"f0fa2dda-72d2-4756-91b0-d6a0a55e2de2","type":"LinearScale"}},"id":"505768cf-9a19-4722-87ac-bcf9f7f67acd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"876d2b34-2eb2-464a-b3c4-f4dd4c7fc931","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"505768cf-9a19-4722-87ac-bcf9f7f67acd","subtype":"Figure","type":"Plot"},"ticker":{"id":"853fa701-932c-4cc0-a1aa-8e7560d28860","type":"BasicTicker"}},"id":"39877b3b-e4f4-4b0f-9da2-6aafcc8d19d3","type":"Grid"},{"attributes":{"callback":null},"id":"57d3205c-8a46-41e2-a223-2476c59538ec","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"95a27c3b-299d-4dd7-a72f-a04c73499cab","type":"Selection"},"selection_policy":{"id":"f145f567-fca4-416c-87f0-e4161a4f5003","type":"UnionRenderers"}},"id":"ebee8579-0ef1-4820-aa33-e459201746c8","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"01cbc14c-5551-4287-bf19-544abfcc516a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ebee8579-0ef1-4820-aa33-e459201746c8","type":"ColumnDataSource"},"glyph":{"id":"f9fddab4-cc29-46c2-b56c-853868daff36","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b1170def-2100-4bba-9a13-ef2fbf946221","type":"Square"},"selection_glyph":null,"view":{"id":"608f1b73-ea08-49a6-a107-8e04a16fb862","type":"CDSView"}},"id":"8e320d26-4a1e-4d90-8bad-207349919735","type":"GlyphRenderer"},{"attributes":{},"id":"6e3f091b-ef19-40c4-8097-27894542c619","type":"ResetTool"},{"attributes":{},"id":"c3167aae-7ad1-4b02-958e-0586b3cef4b8","type":"BasicTicker"},{"attributes":{},"id":"1e38135a-bd7d-4be1-a55c-26a9c6b35090","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"963b65b2-20fb-4a1f-a75e-d2f16ca41212","subtype":"Figure","type":"Plot"},{"id":"505768cf-9a19-4722-87ac-bcf9f7f67acd","subtype":"Figure","type":"Plot"}]},"id":"f9cf182c-fc46-4560-b633-34b32ef7d5b1","type":"Row"},{"attributes":{},"id":"cacdf357-45ab-41d8-b498-008c162f7a34","type":"ResetTool"},{"attributes":{"callback":null},"id":"22326f38-8c68-4f01-9c29-4305816e9f5b","type":"DataRange1d"},{"attributes":{"overlay":{"id":"a882f638-6616-4bd8-baf6-620afe0dadc9","type":"BoxAnnotation"}},"id":"5880976f-4564-4243-8592-afcffaf2b39d","type":"BoxZoomTool"},{"attributes":{},"id":"18d5e058-ee46-4b52-9f95-2bf947b38aa7","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1170def-2100-4bba-9a13-ef2fbf946221","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2a441aa-fb23-4823-81ba-7df79d82d7a4","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"088163ed-3d58-4e0c-abf4-50c11620445d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3167aae-7ad1-4b02-958e-0586b3cef4b8","type":"BasicTicker"}},"id":"d607a623-58b4-4e6a-9360-26f5a0151463","type":"Grid"},{"attributes":{"overlay":{"id":"523a3da9-1e9a-4e18-bab1-76492cc8310b","type":"BoxAnnotation"}},"id":"b6d31a8f-8d80-4673-8fda-91a4b6371a19","type":"BoxZoomTool"},{"attributes":{},"id":"96f4fc0c-d8c6-4795-b134-055452d01416","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"05837d5b-b3a0-42e3-841f-b434056727b7","type":"BoxAnnotation"},{"attributes":{},"id":"cf6a9539-cee2-4b81-98a2-b770c4329abe","type":"BasicTicker"},{"attributes":{"formatter":{"id":"18d5e058-ee46-4b52-9f95-2bf947b38aa7","type":"BasicTickFormatter"},"plot":{"id":"088163ed-3d58-4e0c-abf4-50c11620445d","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c03a4bd-3e27-4cba-a2eb-99cfef032cf6","type":"BasicTicker"}},"id":"937e9cbc-06c9-40a1-925e-58739b4aaa0d","type":"LinearAxis"},{"attributes":{"overlay":{"id":"05837d5b-b3a0-42e3-841f-b434056727b7","type":"BoxAnnotation"}},"id":"89a8b54a-5de7-4cad-a2f7-813a75bed868","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"3f265754-5a0f-4f3d-bd3b-2874774aa821","type":"BasicTickFormatter"},"plot":{"id":"963b65b2-20fb-4a1f-a75e-d2f16ca41212","subtype":"Figure","type":"Plot"},"ticker":{"id":"eace1095-103e-4979-866a-d277347fdb35","type":"BasicTicker"}},"id":"228b5696-7e6c-4eee-972d-11652aabc8e5","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f008b4f2-d67d-447c-b918-74b08c2cdeed","type":"Circle"},{"attributes":{"plot":{"id":"088163ed-3d58-4e0c-abf4-50c11620445d","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c03a4bd-3e27-4cba-a2eb-99cfef032cf6","type":"BasicTicker"}},"id":"6bd01cc9-b218-46f8-b693-44f46e88f90f","type":"Grid"},{"attributes":{},"id":"eace1095-103e-4979-866a-d277347fdb35","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"523a3da9-1e9a-4e18-bab1-76492cc8310b","type":"BoxAnnotation"},{"attributes":{},"id":"1744f06a-002a-404a-9fad-213cf6a4460e","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30982d71-f1f5-4c37-a3d8-b416f158d6ae","type":"PanTool"},{"id":"1e38135a-bd7d-4be1-a55c-26a9c6b35090","type":"WheelZoomTool"},{"id":"b6d31a8f-8d80-4673-8fda-91a4b6371a19","type":"BoxZoomTool"},{"id":"8a192c0d-9201-414f-871a-42e5807cd685","type":"SaveTool"},{"id":"6e3f091b-ef19-40c4-8097-27894542c619","type":"ResetTool"},{"id":"12cc3b32-7639-4bbf-8921-de3c72eb7daa","type":"HelpTool"}]},"id":"f557e6c9-bfc4-4f81-ae6a-d6c4832a4a15","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7b9bae54-ce1e-4936-b997-4f0410f5c2a3","type":"PanTool"},{"id":"1744f06a-002a-404a-9fad-213cf6a4460e","type":"WheelZoomTool"},{"id":"89a8b54a-5de7-4cad-a2f7-813a75bed868","type":"BoxZoomTool"},{"id":"c019b77d-550a-4268-8bfb-e48f37548e23","type":"SaveTool"},{"id":"876d2b34-2eb2-464a-b3c4-f4dd4c7fc931","type":"ResetTool"},{"id":"cdf721d1-f0f7-48e7-846b-e6e2f70d550b","type":"HelpTool"}]},"id":"3e3b4f65-39b8-4eab-ac31-5b7096b1a133","type":"Toolbar"},{"attributes":{"source":{"id":"cb331b9d-a610-46ab-a201-ad3a78a95b93","type":"ColumnDataSource"}},"id":"9bc0c971-faae-4723-b4c1-38278838ad37","type":"CDSView"}],"root_ids":["50748f6a-5440-4db5-8743-7901e2f3bba6"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"67381348-893b-4721-9dda-f2b7759a654d","roots":{"50748f6a-5440-4db5-8743-7901e2f3bba6":"e5546831-670a-4d1d-91c2-ce1a200a1b01"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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