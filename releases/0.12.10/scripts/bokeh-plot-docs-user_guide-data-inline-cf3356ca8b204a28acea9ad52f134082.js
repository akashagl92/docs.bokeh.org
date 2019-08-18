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
      };var element = document.getElementById("8cf009ac-d2a5-484e-8cad-6f8dbc674370");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8cf009ac-d2a5-484e-8cad-6f8dbc674370' but no matching script tag was found. ")
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
                    var docs_json = {"2f42ffbd-6315-4720-a46f-e757ec69a5ee":{"roots":{"references":[{"attributes":{},"id":"117c540c-d5a4-49a8-a98d-602697f2ecc9","type":"BasicTicker"},{"attributes":{"children":[{"id":"417c624b-7db4-4cea-8fe2-de21edf27436","type":"Row"}]},"id":"8f227d2f-d519-43c5-b2f4-5dd082e538ef","type":"Column"},{"attributes":{"plot":null,"text":""},"id":"09a00589-3723-4ad5-92d2-b11e5d548ea8","type":"Title"},{"attributes":{"callback":null},"id":"75abd3fd-d818-4db7-ab8a-17ab841c4612","type":"HoverTool"},{"attributes":{},"id":"b980d94f-5521-4533-8b61-19d08678f8c8","type":"LinearScale"},{"attributes":{},"id":"57fb668a-295c-43e4-b2b2-5c5d56d15cb3","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"81d3278a-0b98-453e-9cc5-981532743c4e","type":"Circle"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"41d640c6-79c6-47f2-b5a8-914536d13438","type":"BoxSelectTool"},{"id":"75abd3fd-d818-4db7-ab8a-17ab841c4612","type":"HoverTool"},{"id":"adf0082f-1f3d-4b0a-90d5-856a892b94b4","type":"ResetTool"},{"id":"bfee1101-2565-40f4-af79-e8b32d0e67c6","type":"BoxSelectTool"},{"id":"c32eda1d-1c15-47cf-9246-1f23f6d6b66b","type":"HoverTool"},{"id":"7be2a3f1-aaf7-4af8-875a-8480ef5759de","type":"ResetTool"}]},"id":"73910fa1-4488-42ff-ac81-0c78a0cbc604","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"41d640c6-79c6-47f2-b5a8-914536d13438","type":"BoxSelectTool"},{"id":"75abd3fd-d818-4db7-ab8a-17ab841c4612","type":"HoverTool"},{"id":"adf0082f-1f3d-4b0a-90d5-856a892b94b4","type":"ResetTool"}]},"id":"7f50adf6-9883-467c-8648-c72bff2e299b","type":"Toolbar"},{"attributes":{},"id":"c351803d-dc22-4971-9aa8-78722f882634","type":"LinearScale"},{"attributes":{"formatter":{"id":"502ffd08-3b09-4a45-91b1-b1047f4df037","type":"BasicTickFormatter"},"plot":{"id":"2cedf263-15c0-4dbc-8f7f-9a403b49ae0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc0087be-fa06-4861-a64b-24fe1fa581a0","type":"BasicTicker"}},"id":"d1cfb329-90bc-4bae-9ed3-b6ebed2d7f13","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c32eda1d-1c15-47cf-9246-1f23f6d6b66b","type":"HoverTool"},{"attributes":{"below":[{"id":"f1f1581d-cdda-48ec-8cc4-6f6f38deec43","type":"LinearAxis"}],"left":[{"id":"fbadbe3e-7358-4232-8756-9b0e76ba5b1a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f1f1581d-cdda-48ec-8cc4-6f6f38deec43","type":"LinearAxis"},{"id":"bdd2a2a7-a86a-471a-badf-81c5f355e1cc","type":"Grid"},{"id":"fbadbe3e-7358-4232-8756-9b0e76ba5b1a","type":"LinearAxis"},{"id":"fad43480-6b7e-49de-84d4-a19c7de94217","type":"Grid"},{"id":"c2f1626d-fb04-4a1c-b3da-6164d3241f91","type":"BoxAnnotation"},{"id":"4d8138db-cb05-4180-9a75-26ee860a22a1","type":"GlyphRenderer"}],"title":{"id":"e034b48e-2447-4ea2-8adb-abd916f262da","type":"Title"},"toolbar":{"id":"7f50adf6-9883-467c-8648-c72bff2e299b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1d1adf1a-d4df-457b-a44d-7558ce30a2ee","type":"DataRange1d"},"x_scale":{"id":"b980d94f-5521-4533-8b61-19d08678f8c8","type":"LinearScale"},"y_range":{"id":"13fa109e-a45e-4f66-a36c-0827a16284ba","type":"DataRange1d"},"y_scale":{"id":"57fb668a-295c-43e4-b2b2-5c5d56d15cb3","type":"LinearScale"}},"id":"48912cfb-88d3-437f-b460-247d8980544a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8f0076a8-8141-40d4-a596-a5a1c5e97336","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2cedf263-15c0-4dbc-8f7f-9a403b49ae0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc0087be-fa06-4861-a64b-24fe1fa581a0","type":"BasicTicker"}},"id":"2af45373-36b5-4c7e-95e7-96bb09e4785e","type":"Grid"},{"attributes":{"filters":[{"id":"4fb1bd13-817d-42ac-87f0-221745c30362","type":"IndexFilter"}],"source":{"id":"df01458d-9321-46da-91b6-34ce7cf5f73e","type":"ColumnDataSource"}},"id":"9932a428-9505-413d-a20c-7518a791108f","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b01aa2e5-036d-407f-bb00-f54a01e0fa28","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"df01458d-9321-46da-91b6-34ce7cf5f73e","type":"ColumnDataSource"},{"attributes":{},"id":"5d22b622-e183-47ac-89fb-14fa2219578c","type":"BasicTickFormatter"},{"attributes":{},"id":"502ffd08-3b09-4a45-91b1-b1047f4df037","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"df01458d-9321-46da-91b6-34ce7cf5f73e","type":"ColumnDataSource"},"glyph":{"id":"15d487ca-5f0a-4a5d-a997-5ae5b1c655a7","type":"Circle"},"hover_glyph":{"id":"19bce6cc-e0b7-45a6-9310-58cb66cf7184","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"b01aa2e5-036d-407f-bb00-f54a01e0fa28","type":"Circle"},"selection_glyph":null,"view":{"id":"9932a428-9505-413d-a20c-7518a791108f","type":"CDSView"}},"id":"e5505b3d-a356-483c-8fe9-776716ab8160","type":"GlyphRenderer"},{"attributes":{},"id":"adf0082f-1f3d-4b0a-90d5-856a892b94b4","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"15d487ca-5f0a-4a5d-a997-5ae5b1c655a7","type":"Circle"},{"attributes":{"callback":null},"id":"d23809c4-e7b7-4e9a-86ce-fcd1b707fc96","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"48912cfb-88d3-437f-b460-247d8980544a","subtype":"Figure","type":"Plot"},"ticker":{"id":"987d0577-b121-4779-ac25-10982fdff2c4","type":"BasicTicker"}},"id":"fad43480-6b7e-49de-84d4-a19c7de94217","type":"Grid"},{"attributes":{},"id":"576de6e4-b566-4332-a3a0-c39fa3785776","type":"BasicTicker"},{"attributes":{},"id":"99ad5b39-39dc-4491-8812-c6bbbba2b8cb","type":"LinearScale"},{"attributes":{"formatter":{"id":"5d22b622-e183-47ac-89fb-14fa2219578c","type":"BasicTickFormatter"},"plot":{"id":"2cedf263-15c0-4dbc-8f7f-9a403b49ae0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"576de6e4-b566-4332-a3a0-c39fa3785776","type":"BasicTicker"}},"id":"b9f628a1-e223-416b-966c-c51c3e26195c","type":"LinearAxis"},{"attributes":{},"id":"cbd59fb6-6c76-4916-ac2f-649e89861293","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"73910fa1-4488-42ff-ac81-0c78a0cbc604","type":"ToolbarBox"},{"id":"8f227d2f-d519-43c5-b2f4-5dd082e538ef","type":"Column"}]},"id":"35158b7c-9f86-417b-9a2f-6fbf5ca33ab4","type":"Column"},{"attributes":{"formatter":{"id":"cbd59fb6-6c76-4916-ac2f-649e89861293","type":"BasicTickFormatter"},"plot":{"id":"48912cfb-88d3-437f-b460-247d8980544a","subtype":"Figure","type":"Plot"},"ticker":{"id":"987d0577-b121-4779-ac25-10982fdff2c4","type":"BasicTicker"}},"id":"fbadbe3e-7358-4232-8756-9b0e76ba5b1a","type":"LinearAxis"},{"attributes":{},"id":"7be2a3f1-aaf7-4af8-875a-8480ef5759de","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bfee1101-2565-40f4-af79-e8b32d0e67c6","type":"BoxSelectTool"},{"id":"c32eda1d-1c15-47cf-9246-1f23f6d6b66b","type":"HoverTool"},{"id":"7be2a3f1-aaf7-4af8-875a-8480ef5759de","type":"ResetTool"}]},"id":"b4aef159-d109-4cf0-a690-d2dbc91a56af","type":"Toolbar"},{"attributes":{},"id":"cc0087be-fa06-4861-a64b-24fe1fa581a0","type":"BasicTicker"},{"attributes":{"indices":[0,2,4]},"id":"4fb1bd13-817d-42ac-87f0-221745c30362","type":"IndexFilter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c2f1626d-fb04-4a1c-b3da-6164d3241f91","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"a01363b7-3375-4733-86a8-4d19154314c8","type":"DataRange1d"},{"attributes":{"plot":{"id":"48912cfb-88d3-437f-b460-247d8980544a","subtype":"Figure","type":"Plot"},"ticker":{"id":"117c540c-d5a4-49a8-a98d-602697f2ecc9","type":"BasicTicker"}},"id":"bdd2a2a7-a86a-471a-badf-81c5f355e1cc","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"c2f1626d-fb04-4a1c-b3da-6164d3241f91","type":"BoxAnnotation"},"renderers":[{"id":"4d8138db-cb05-4180-9a75-26ee860a22a1","type":"GlyphRenderer"}]},"id":"41d640c6-79c6-47f2-b5a8-914536d13438","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34bf909d-9261-429a-b0cd-6503888923a4","type":"Circle"},{"attributes":{"formatter":{"id":"8f0076a8-8141-40d4-a596-a5a1c5e97336","type":"BasicTickFormatter"},"plot":{"id":"48912cfb-88d3-437f-b460-247d8980544a","subtype":"Figure","type":"Plot"},"ticker":{"id":"117c540c-d5a4-49a8-a98d-602697f2ecc9","type":"BasicTicker"}},"id":"f1f1581d-cdda-48ec-8cc4-6f6f38deec43","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1d1adf1a-d4df-457b-a44d-7558ce30a2ee","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ce41f278-7650-449a-9a3b-63dd8c0ffe5f","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5eed0f0-8fef-4179-a29a-12a7f0623d0f","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"e034b48e-2447-4ea2-8adb-abd916f262da","type":"Title"},{"attributes":{},"id":"987d0577-b121-4779-ac25-10982fdff2c4","type":"BasicTicker"},{"attributes":{"below":[{"id":"b9f628a1-e223-416b-966c-c51c3e26195c","type":"LinearAxis"}],"left":[{"id":"d1cfb329-90bc-4bae-9ed3-b6ebed2d7f13","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b9f628a1-e223-416b-966c-c51c3e26195c","type":"LinearAxis"},{"id":"cabd61b2-1607-40cb-ba3d-50df8a8aba8e","type":"Grid"},{"id":"d1cfb329-90bc-4bae-9ed3-b6ebed2d7f13","type":"LinearAxis"},{"id":"2af45373-36b5-4c7e-95e7-96bb09e4785e","type":"Grid"},{"id":"ce41f278-7650-449a-9a3b-63dd8c0ffe5f","type":"BoxAnnotation"},{"id":"e5505b3d-a356-483c-8fe9-776716ab8160","type":"GlyphRenderer"}],"title":{"id":"09a00589-3723-4ad5-92d2-b11e5d548ea8","type":"Title"},"toolbar":{"id":"b4aef159-d109-4cf0-a690-d2dbc91a56af","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a01363b7-3375-4733-86a8-4d19154314c8","type":"DataRange1d"},"x_scale":{"id":"c351803d-dc22-4971-9aa8-78722f882634","type":"LinearScale"},"y_range":{"id":"d23809c4-e7b7-4e9a-86ce-fcd1b707fc96","type":"DataRange1d"},"y_scale":{"id":"99ad5b39-39dc-4491-8812-c6bbbba2b8cb","type":"LinearScale"}},"id":"2cedf263-15c0-4dbc-8f7f-9a403b49ae0e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"ce41f278-7650-449a-9a3b-63dd8c0ffe5f","type":"BoxAnnotation"},"renderers":[{"id":"e5505b3d-a356-483c-8fe9-776716ab8160","type":"GlyphRenderer"}]},"id":"bfee1101-2565-40f4-af79-e8b32d0e67c6","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"48912cfb-88d3-437f-b460-247d8980544a","subtype":"Figure","type":"Plot"},{"id":"2cedf263-15c0-4dbc-8f7f-9a403b49ae0e","subtype":"Figure","type":"Plot"}]},"id":"417c624b-7db4-4cea-8fe2-de21edf27436","type":"Row"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19bce6cc-e0b7-45a6-9310-58cb66cf7184","type":"Circle"},{"attributes":{"plot":{"id":"2cedf263-15c0-4dbc-8f7f-9a403b49ae0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"576de6e4-b566-4332-a3a0-c39fa3785776","type":"BasicTicker"}},"id":"cabd61b2-1607-40cb-ba3d-50df8a8aba8e","type":"Grid"},{"attributes":{"data_source":{"id":"df01458d-9321-46da-91b6-34ce7cf5f73e","type":"ColumnDataSource"},"glyph":{"id":"34bf909d-9261-429a-b0cd-6503888923a4","type":"Circle"},"hover_glyph":{"id":"e5eed0f0-8fef-4179-a29a-12a7f0623d0f","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"81d3278a-0b98-453e-9cc5-981532743c4e","type":"Circle"},"selection_glyph":null,"view":{"id":"ac8d35be-c10a-4b52-bd52-4c89cbde61fe","type":"CDSView"}},"id":"4d8138db-cb05-4180-9a75-26ee860a22a1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"13fa109e-a45e-4f66-a36c-0827a16284ba","type":"DataRange1d"},{"attributes":{"source":{"id":"df01458d-9321-46da-91b6-34ce7cf5f73e","type":"ColumnDataSource"}},"id":"ac8d35be-c10a-4b52-bd52-4c89cbde61fe","type":"CDSView"}],"root_ids":["35158b7c-9f86-417b-9a2f-6fbf5ca33ab4"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"2f42ffbd-6315-4720-a46f-e757ec69a5ee","elementid":"8cf009ac-d2a5-484e-8cad-6f8dbc674370","modelid":"35158b7c-9f86-417b-9a2f-6fbf5ca33ab4"}];
                
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
