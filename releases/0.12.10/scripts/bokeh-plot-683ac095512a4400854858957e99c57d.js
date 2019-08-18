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
      };var element = document.getElementById("f956ce22-1e7c-4d2f-a5a2-f5be5f513308");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f956ce22-1e7c-4d2f-a5a2-f5be5f513308' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"0135c5a0-460b-4c66-ba9b-bff0f24ee274":{"roots":{"references":[{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"3786605f-14c9-4409-b45e-d549e8957fbe","type":"CategoricalAxis"}],"left":[{"id":"ce1f9513-191e-4af2-b32f-6c11e17762f3","type":"LinearAxis"}],"renderers":[{"id":"3786605f-14c9-4409-b45e-d549e8957fbe","type":"CategoricalAxis"},{"id":"268b0174-8246-49ef-a7e8-70c9c2a6d7a5","type":"Grid"},{"id":"ce1f9513-191e-4af2-b32f-6c11e17762f3","type":"LinearAxis"},{"id":"d2bc059f-0dd6-4dc0-8d2f-b2bf3eef5c4a","type":"Grid"},{"id":"da1085e0-e22a-414a-a096-d26103718aae","type":"GlyphRenderer"},{"id":"cbde355e-c6e3-412a-983e-800f35b3723f","type":"GlyphRenderer"},{"id":"8b764ef7-25da-4d86-954e-c3cc20d273f7","type":"GlyphRenderer"},{"id":"e77629bf-36b3-4fbe-b62c-c35ac97e06c0","type":"GlyphRenderer"},{"id":"2b15488b-fbe7-43c4-9aa7-ab373d09612c","type":"GlyphRenderer"},{"id":"be3bcc35-3762-49db-a159-79a0f00edeba","type":"GlyphRenderer"},{"id":"31b76126-b527-452a-aee0-9c444e2e6248","type":"GlyphRenderer"}],"title":{"id":"83b9c5e5-ea87-4d32-9665-62bb1ff565bf","type":"Title"},"toolbar":{"id":"f1598403-a712-4b7b-a6da-b76f9d91f959","type":"Toolbar"},"x_range":{"id":"5161a370-aaa6-406e-97d0-3c5a8d8d34a6","type":"FactorRange"},"x_scale":{"id":"2cf4fb5f-26c2-4dc0-942c-f6218b9a26b3","type":"CategoricalScale"},"y_range":{"id":"46bccf0d-a539-4657-9a0b-6d5ee463c5e1","type":"DataRange1d"},"y_scale":{"id":"bfcb8034-4b76-4e71-8665-763c434e67ed","type":"LinearScale"}},"id":"2ba67e59-db55-4456-89fb-ae0ae1f19a1b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4c88d5cf-2791-4aac-9610-3f496172ffba","type":"BasicTicker"},{"attributes":{},"id":"c57f4af9-4bce-4ef9-9401-a3c7e832f995","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"038a5c6f-6ca3-4805-975a-d0865fedd8fe","type":"ColumnDataSource"},"glyph":{"id":"2cc49fc9-b1d0-44c0-82c3-11ef9d5598b2","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4d933a5e-903e-4a04-b505-9c006679424a","type":"Segment"},"selection_glyph":null,"view":{"id":"8608e146-268d-41ac-bcff-e19c671c8c5e","type":"CDSView"}},"id":"cbde355e-c6e3-412a-983e-800f35b3723f","type":"GlyphRenderer"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2cc49fc9-b1d0-44c0-82c3-11ef9d5598b2","type":"Segment"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"5161a370-aaa6-406e-97d0-3c5a8d8d34a6","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"SsblebHPBMCX0VSdevoEwMrgu0XpHf6/JqJGtQbN/L8SHjTodgbiv3RIqUoJtue/","dtype":"float64","shape":[6]}}},"id":"25d89796-c6fb-4748-9f37-b3282183a35b","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"7251eba5-5952-4de0-86bf-6b570da8561c","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"6+b/NI3lA0CUQ4b0dhcFQOGdAhZXXw1AAr+lK1LJD0A7GE4Xit0RQPrYwUoxlhJA","dtype":"float64","shape":[6]}}},"id":"a9761750-4051-45cc-b918-e07b83ff97f7","type":"ColumnDataSource"},{"attributes":{"source":{"id":"125320f0-1556-4727-8cea-9f45eea3aa21","type":"ColumnDataSource"}},"id":"fbba93ed-4706-463d-baae-2d3b3f6f9a89","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"2ba67e59-db55-4456-89fb-ae0ae1f19a1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4c88d5cf-2791-4aac-9610-3f496172ffba","type":"BasicTicker"}},"id":"d2bc059f-0dd6-4dc0-8d2f-b2bf3eef5c4a","type":"Grid"},{"attributes":{"callback":null},"id":"46bccf0d-a539-4657-9a0b-6d5ee463c5e1","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"tGlqdAd9qD91OpWc3DDBvxWFOD5PHPA/EvV7u7UM8j9MEfg6m2T/P7TStus+4/8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"KLsY/QDX5b+7GucTt3Pkvxot6NJz1tE/pqfAvWVb1z/z2mT6SSr1P2TuNfSoU/Q/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"5c5b6e96-bdc8-4a18-bb65-92316f4ff020","type":"ColumnDataSource"},{"attributes":{},"id":"400bb190-cae9-4a5f-84c2-fce175ce9810","type":"CategoricalTicker"},{"attributes":{},"id":"e477fac8-6cf5-42f8-9b2b-e0fc61b60412","type":"SaveTool"},{"attributes":{"source":{"id":"5c5b6e96-bdc8-4a18-bb65-92316f4ff020","type":"ColumnDataSource"}},"id":"6216579b-39c5-48f6-b9c3-9768f6bb18d2","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5ac27705-a54a-4b01-a872-a5f67f1b0d87","type":"Rect"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"2ba67e59-db55-4456-89fb-ae0ae1f19a1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"400bb190-cae9-4a5f-84c2-fce175ce9810","type":"CategoricalTicker"}},"id":"268b0174-8246-49ef-a7e8-70c9c2a6d7a5","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"49a244c1-dce4-45db-ab46-3bc4a3df5b06","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4466242c-6308-4d77-b3ef-644f582be6f5","type":"Rect"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"41afa34d-ca56-4e86-858b-ade1c735e1f2","type":"Rect"},{"attributes":{"source":{"id":"a9761750-4051-45cc-b918-e07b83ff97f7","type":"ColumnDataSource"}},"id":"e8fbfcf0-20c6-4303-8db9-63d3a0575925","type":"CDSView"},{"attributes":{},"id":"00f68891-6ce4-4b0c-a841-ed7132107895","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"038a5c6f-6ca3-4805-975a-d0865fedd8fe","type":"ColumnDataSource"}},"id":"8608e146-268d-41ac-bcff-e19c671c8c5e","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9820883-2765-4f07-96ac-174114999abc","type":"Circle"},{"attributes":{"data_source":{"id":"20250a03-82b8-439f-b12a-f91da23f39cf","type":"ColumnDataSource"},"glyph":{"id":"ab803d2e-7cc7-4c2e-b0f5-3c9016728129","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dff0a81f-91fd-4315-88dd-518703425d86","type":"Segment"},"selection_glyph":null,"view":{"id":"4444a057-2fc2-4b1d-b273-717e2567e494","type":"CDSView"}},"id":"da1085e0-e22a-414a-a096-d26103718aae","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"c57f4af9-4bce-4ef9-9401-a3c7e832f995","type":"BasicTickFormatter"},"plot":{"id":"2ba67e59-db55-4456-89fb-ae0ae1f19a1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4c88d5cf-2791-4aac-9610-3f496172ffba","type":"BasicTicker"}},"id":"ce1f9513-191e-4af2-b32f-6c11e17762f3","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"83b9c5e5-ea87-4d32-9665-62bb1ff565bf","type":"Title"},{"attributes":{"source":{"id":"20250a03-82b8-439f-b12a-f91da23f39cf","type":"ColumnDataSource"}},"id":"4444a057-2fc2-4b1d-b273-717e2567e494","type":"CDSView"},{"attributes":{"source":{"id":"25d89796-c6fb-4748-9f37-b3282183a35b","type":"ColumnDataSource"}},"id":"8445c7be-0ae3-4bb7-809f-bad71c8bb85c","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7279fcd3-e91c-45ee-b1fb-beb150fd0640","type":"Rect"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["b","b","c","d","d","e","e","e","e","e","e","f"],"y":[-2.6739845563981697,-2.7249809398696656,-2.0199908307909547,-2.018003344206683,4.431334087283885,4.66668500207961,5.071122294175036,-0.7403683369075091,-0.7118251694865623,-0.926707003604033,4.491196576135772,5.33331904989796]}},"id":"125320f0-1556-4727-8cea-9f45eea3aa21","type":"ColumnDataSource"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"ab803d2e-7cc7-4c2e-b0f5-3c9016728129","type":"Segment"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"4d933a5e-903e-4a04-b505-9c006679424a","type":"Segment"},{"attributes":{"data_source":{"id":"a9761750-4051-45cc-b918-e07b83ff97f7","type":"ColumnDataSource"},"glyph":{"id":"41afa34d-ca56-4e86-858b-ade1c735e1f2","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4466242c-6308-4d77-b3ef-644f582be6f5","type":"Rect"},"selection_glyph":null,"view":{"id":"e8fbfcf0-20c6-4303-8db9-63d3a0575925","type":"CDSView"}},"id":"be3bcc35-3762-49db-a159-79a0f00edeba","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"SsblebHPBMCX0VSdevoEwMrgu0XpHf6/JqJGtQbN/L8SHjTodgbiv3RIqUoJtue/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"KLsY/QDX5b+7GucTt3Pkvxot6NJz1tE/pqfAvWVb1z/z2mT6SSr1P2TuNfSoU/Q/","dtype":"float64","shape":[6]}}},"id":"038a5c6f-6ca3-4805-975a-d0865fedd8fe","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"417ab304-7107-4c82-a2fa-47ffa86e8f6e","type":"ColumnDataSource"},"glyph":{"id":"135746dc-7c03-41a9-8db3-2579276d9329","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bfb1b9fd-a8f6-4ee2-9d11-552e62edc10c","type":"VBar"},"selection_glyph":null,"view":{"id":"7674a8ac-63a3-40d3-a36e-7a6a3b672561","type":"CDSView"}},"id":"8b764ef7-25da-4d86-954e-c3cc20d273f7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5c5b6e96-bdc8-4a18-bb65-92316f4ff020","type":"ColumnDataSource"},"glyph":{"id":"49a244c1-dce4-45db-ab46-3bc4a3df5b06","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7251eba5-5952-4de0-86bf-6b570da8561c","type":"VBar"},"selection_glyph":null,"view":{"id":"6216579b-39c5-48f6-b9c3-9768f6bb18d2","type":"CDSView"}},"id":"e77629bf-36b3-4fbe-b62c-c35ac97e06c0","type":"GlyphRenderer"},{"attributes":{},"id":"bfcb8034-4b76-4e71-8665-763c434e67ed","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"bfb1b9fd-a8f6-4ee2-9d11-552e62edc10c","type":"VBar"},{"attributes":{"data_source":{"id":"25d89796-c6fb-4748-9f37-b3282183a35b","type":"ColumnDataSource"},"glyph":{"id":"7279fcd3-e91c-45ee-b1fb-beb150fd0640","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5ac27705-a54a-4b01-a872-a5f67f1b0d87","type":"Rect"},"selection_glyph":null,"view":{"id":"8445c7be-0ae3-4bb7-809f-bad71c8bb85c","type":"CDSView"}},"id":"2b15488b-fbe7-43c4-9aa7-ab373d09612c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"6+b/NI3lA0CUQ4b0dhcFQOGdAhZXXw1AAr+lK1LJD0A7GE4Xit0RQPrYwUoxlhJA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"3ori+VzR5T+vV7bXFdvlP1FTsxuhgvs/9LGUMsTu/D94u1x3UaQEQLMOeOum9wRA","dtype":"float64","shape":[6]}}},"id":"20250a03-82b8-439f-b12a-f91da23f39cf","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"3ori+VzR5T+vV7bXFdvlP1FTsxuhgvs/9LGUMsTu/D94u1x3UaQEQLMOeOum9wRA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"tGlqdAd9qD91OpWc3DDBvxWFOD5PHPA/EvV7u7UM8j9MEfg6m2T/P7TStus+4/8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"417ab304-7107-4c82-a2fa-47ffa86e8f6e","type":"ColumnDataSource"},{"attributes":{"source":{"id":"417ab304-7107-4c82-a2fa-47ffa86e8f6e","type":"ColumnDataSource"}},"id":"7674a8ac-63a3-40d3-a36e-7a6a3b672561","type":"CDSView"},{"attributes":{},"id":"2cf4fb5f-26c2-4dc0-942c-f6218b9a26b3","type":"CategoricalScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"dff0a81f-91fd-4315-88dd-518703425d86","type":"Segment"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e477fac8-6cf5-42f8-9b2b-e0fc61b60412","type":"SaveTool"}]},"id":"f1598403-a712-4b7b-a6da-b76f9d91f959","type":"Toolbar"},{"attributes":{"data_source":{"id":"125320f0-1556-4727-8cea-9f45eea3aa21","type":"ColumnDataSource"},"glyph":{"id":"abc6a6df-ec3d-49fd-9d41-7acac00a8a75","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f9820883-2765-4f07-96ac-174114999abc","type":"Circle"},"selection_glyph":null,"view":{"id":"fbba93ed-4706-463d-baae-2d3b3f6f9a89","type":"CDSView"}},"id":"31b76126-b527-452a-aee0-9c444e2e6248","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"135746dc-7c03-41a9-8db3-2579276d9329","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"abc6a6df-ec3d-49fd-9d41-7acac00a8a75","type":"Circle"},{"attributes":{"formatter":{"id":"00f68891-6ce4-4b0c-a841-ed7132107895","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"2ba67e59-db55-4456-89fb-ae0ae1f19a1b","subtype":"Figure","type":"Plot"},"ticker":{"id":"400bb190-cae9-4a5f-84c2-fce175ce9810","type":"CategoricalTicker"}},"id":"3786605f-14c9-4409-b45e-d549e8957fbe","type":"CategoricalAxis"}],"root_ids":["2ba67e59-db55-4456-89fb-ae0ae1f19a1b"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"0135c5a0-460b-4c66-ba9b-bff0f24ee274","elementid":"f956ce22-1e7c-4d2f-a5a2-f5be5f513308","modelid":"2ba67e59-db55-4456-89fb-ae0ae1f19a1b"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
