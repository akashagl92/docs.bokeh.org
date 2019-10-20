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
      };var element = document.getElementById("5ff16099-f913-4ea9-a511-c7a36225ecb0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5ff16099-f913-4ea9-a511-c7a36225ecb0' but no matching script tag was found. ")
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
                    var docs_json = {"8e996ff3-e7d6-48d1-a111-832b21634043":{"roots":{"references":[{"attributes":{"plot":{"id":"03170cf4-c7b3-4890-b7ef-11b070418d0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3725e35-07ef-48e5-a1ec-9157540759e6","type":"BasicTicker"}},"id":"cc80d85f-ee4c-4f9a-b259-128cbf2f76fe","type":"Grid"},{"attributes":{},"id":"4ad116b6-acfe-4821-91d9-45c944b880f3","type":"LinearScale"},{"attributes":{},"id":"fe47dba6-fe2a-48bf-b30c-b87c8854aa06","type":"SaveTool"},{"attributes":{"data_source":{"id":"40409343-dbab-4c7c-9912-ac9468564d6f","type":"ColumnDataSource"},"glyph":{"id":"a09b3612-7fb0-4d7b-8ea1-37ca7591064b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"670d4b6f-40be-4880-943c-434f72721fa6","type":"Circle"},"selection_glyph":null,"view":{"id":"40f6aa09-9838-4a7d-b068-7d5b3b29db09","type":"CDSView"}},"id":"da9b37d1-f19c-45e8-abba-8f07d0e530c8","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cb4a3772-487f-4e6c-8fa4-ff63986e7f11","type":"PanTool"},{"id":"c4066d51-923d-4609-bbdc-d9058d96933c","type":"WheelZoomTool"},{"id":"40f06a16-ad87-4408-8c17-eadef908e460","type":"BoxZoomTool"},{"id":"fe47dba6-fe2a-48bf-b30c-b87c8854aa06","type":"SaveTool"},{"id":"69f0c833-7e7f-4d85-b7e3-ec921f0a253c","type":"ResetTool"},{"id":"4332e762-5866-4519-89af-0cbed3d5b375","type":"HelpTool"}]},"id":"4fb6e8cd-f512-46fe-b604-815a134f20dd","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"670d4b6f-40be-4880-943c-434f72721fa6","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"40409343-dbab-4c7c-9912-ac9468564d6f","type":"ColumnDataSource"},{"attributes":{},"id":"4332e762-5866-4519-89af-0cbed3d5b375","type":"HelpTool"},{"attributes":{"below":[{"id":"2e40c7e6-f94d-4127-96ab-3cf30a46e3be","type":"LinearAxis"}],"left":[{"id":"86167933-cb58-4ade-901a-921635b1b44f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2e40c7e6-f94d-4127-96ab-3cf30a46e3be","type":"LinearAxis"},{"id":"cc80d85f-ee4c-4f9a-b259-128cbf2f76fe","type":"Grid"},{"id":"86167933-cb58-4ade-901a-921635b1b44f","type":"LinearAxis"},{"id":"9999d861-686b-47cb-82bf-e0c0b1cc8dbe","type":"Grid"},{"id":"9ae7a239-0636-48b4-b008-89eb6ae1c674","type":"BoxAnnotation"},{"id":"da9b37d1-f19c-45e8-abba-8f07d0e530c8","type":"GlyphRenderer"}],"title":{"id":"9c9651d1-652d-4081-8abc-60598931cc00","type":"Title"},"toolbar":{"id":"4fb6e8cd-f512-46fe-b604-815a134f20dd","type":"Toolbar"},"x_range":{"id":"b1b3c088-87bf-44ce-9b6d-86e0938c4e47","type":"DataRange1d"},"x_scale":{"id":"4ad116b6-acfe-4821-91d9-45c944b880f3","type":"LinearScale"},"y_range":{"id":"faa491bc-2af2-4556-a17e-81de81e0bb56","type":"DataRange1d"},"y_scale":{"id":"695cd2e1-027a-4b3d-93ce-39d750d2ed68","type":"LinearScale"}},"id":"03170cf4-c7b3-4890-b7ef-11b070418d0e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"695cd2e1-027a-4b3d-93ce-39d750d2ed68","type":"LinearScale"},{"attributes":{"callback":null},"id":"faa491bc-2af2-4556-a17e-81de81e0bb56","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a09b3612-7fb0-4d7b-8ea1-37ca7591064b","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"9c9651d1-652d-4081-8abc-60598931cc00","type":"Title"},{"attributes":{"formatter":{"id":"5d9ea6eb-bfec-4351-b89a-dfe694132d23","type":"PrintfTickFormatter"},"plot":{"id":"03170cf4-c7b3-4890-b7ef-11b070418d0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3725e35-07ef-48e5-a1ec-9157540759e6","type":"BasicTicker"}},"id":"2e40c7e6-f94d-4127-96ab-3cf30a46e3be","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b1b3c088-87bf-44ce-9b6d-86e0938c4e47","type":"DataRange1d"},{"attributes":{"format":"%4.1e"},"id":"5d9ea6eb-bfec-4351-b89a-dfe694132d23","type":"PrintfTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"03170cf4-c7b3-4890-b7ef-11b070418d0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"48864fdb-4963-435e-bc52-869d87944efc","type":"BasicTicker"}},"id":"9999d861-686b-47cb-82bf-e0c0b1cc8dbe","type":"Grid"},{"attributes":{},"id":"c3725e35-07ef-48e5-a1ec-9157540759e6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4992c8be-7278-4737-bdbe-2d822530fb80","type":"PrintfTickFormatter"},"plot":{"id":"03170cf4-c7b3-4890-b7ef-11b070418d0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"48864fdb-4963-435e-bc52-869d87944efc","type":"BasicTicker"}},"id":"86167933-cb58-4ade-901a-921635b1b44f","type":"LinearAxis"},{"attributes":{},"id":"cb4a3772-487f-4e6c-8fa4-ff63986e7f11","type":"PanTool"},{"attributes":{},"id":"c4066d51-923d-4609-bbdc-d9058d96933c","type":"WheelZoomTool"},{"attributes":{},"id":"48864fdb-4963-435e-bc52-869d87944efc","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9ae7a239-0636-48b4-b008-89eb6ae1c674","type":"BoxAnnotation"},{"attributes":{"format":"%5.3f mu"},"id":"4992c8be-7278-4737-bdbe-2d822530fb80","type":"PrintfTickFormatter"},{"attributes":{"source":{"id":"40409343-dbab-4c7c-9912-ac9468564d6f","type":"ColumnDataSource"}},"id":"40f6aa09-9838-4a7d-b068-7d5b3b29db09","type":"CDSView"},{"attributes":{},"id":"69f0c833-7e7f-4d85-b7e3-ec921f0a253c","type":"ResetTool"},{"attributes":{"overlay":{"id":"9ae7a239-0636-48b4-b008-89eb6ae1c674","type":"BoxAnnotation"}},"id":"40f06a16-ad87-4408-8c17-eadef908e460","type":"BoxZoomTool"}],"root_ids":["03170cf4-c7b3-4890-b7ef-11b070418d0e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"8e996ff3-e7d6-48d1-a111-832b21634043","elementid":"5ff16099-f913-4ea9-a511-c7a36225ecb0","modelid":"03170cf4-c7b3-4890-b7ef-11b070418d0e"}];
                
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
