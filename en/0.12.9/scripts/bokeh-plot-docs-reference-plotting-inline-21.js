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
      };var element = document.getElementById("cef840d9-a438-4635-b884-15e48d937189");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cef840d9-a438-4635-b884-15e48d937189' but no matching script tag was found. ")
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
                    var docs_json = {"00ca74ff-eb91-4edf-9f10-3bb0f0082816":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"82666780-5eb8-4d48-9700-89e72b8cf9b0","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a18714b0-6230-4e4a-84e2-a22dc3bbb762","type":"BoxAnnotation"},{"attributes":{},"id":"aca2b84d-f364-4e4c-ac1e-37c155886483","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aca2b84d-f364-4e4c-ac1e-37c155886483","type":"PanTool"},{"id":"0a186dce-1ac9-4e9e-9e43-c789c278bcee","type":"WheelZoomTool"},{"id":"cb88e2cc-100d-4e16-9df0-97825194bcbe","type":"BoxZoomTool"},{"id":"015fddbf-fde4-4b49-b37e-d1bf8aa7548f","type":"SaveTool"},{"id":"c1d8375e-b579-433a-ba3d-6329de0832ae","type":"ResetTool"},{"id":"055eb989-9f98-43f2-bfde-663795cacc45","type":"HelpTool"}]},"id":"2cc2cfdb-17b3-4408-941f-5c78e86507c7","type":"Toolbar"},{"attributes":{"data_source":{"id":"82666780-5eb8-4d48-9700-89e72b8cf9b0","type":"ColumnDataSource"},"glyph":{"id":"a9a977f7-5c70-4f71-a21f-8436de94cb72","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11b7d969-5112-4d65-9f1e-fec3d6568971","type":"SquareCross"},"selection_glyph":null,"view":{"id":"0ee9d74b-e11a-4275-b650-56211f1faaa6","type":"CDSView"}},"id":"72863178-c278-41a6-8dd7-768f48a2b102","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"0f77f5a3-e976-4689-a19d-132abf9626a5","type":"DataRange1d"},{"attributes":{"below":[{"id":"17a160cf-3648-42ee-b7f1-493b94b74edb","type":"LinearAxis"}],"left":[{"id":"f49b259f-6015-4e69-8c9e-d3aa37719319","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17a160cf-3648-42ee-b7f1-493b94b74edb","type":"LinearAxis"},{"id":"0a80d330-9ccc-4d5b-877d-54e57085751f","type":"Grid"},{"id":"f49b259f-6015-4e69-8c9e-d3aa37719319","type":"LinearAxis"},{"id":"ebcb7ac7-a0c7-4892-aeb1-fc380e3e6990","type":"Grid"},{"id":"a18714b0-6230-4e4a-84e2-a22dc3bbb762","type":"BoxAnnotation"},{"id":"72863178-c278-41a6-8dd7-768f48a2b102","type":"GlyphRenderer"}],"title":{"id":"33c21dfa-606c-475a-964c-56c8965c2ad2","type":"Title"},"toolbar":{"id":"2cc2cfdb-17b3-4408-941f-5c78e86507c7","type":"Toolbar"},"x_range":{"id":"0f77f5a3-e976-4689-a19d-132abf9626a5","type":"DataRange1d"},"x_scale":{"id":"81bc34cb-f276-404e-b0f5-19f2c3875b06","type":"LinearScale"},"y_range":{"id":"761af3cb-ea7d-496a-b128-97a4ab2a02dc","type":"DataRange1d"},"y_scale":{"id":"cf3a5dc1-63a6-4580-8135-4eb62569e2f8","type":"LinearScale"}},"id":"ade74343-32b2-4c4d-b461-9b7abf418792","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0a186dce-1ac9-4e9e-9e43-c789c278bcee","type":"WheelZoomTool"},{"attributes":{},"id":"f5d314db-7d6f-429e-ad03-00be2ea11b34","type":"BasicTicker"},{"attributes":{"overlay":{"id":"a18714b0-6230-4e4a-84e2-a22dc3bbb762","type":"BoxAnnotation"}},"id":"cb88e2cc-100d-4e16-9df0-97825194bcbe","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9a977f7-5c70-4f71-a21f-8436de94cb72","type":"SquareCross"},{"attributes":{},"id":"015fddbf-fde4-4b49-b37e-d1bf8aa7548f","type":"SaveTool"},{"attributes":{"formatter":{"id":"2bd72fe7-6f45-4e68-a741-53ad40caea31","type":"BasicTickFormatter"},"plot":{"id":"ade74343-32b2-4c4d-b461-9b7abf418792","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5d314db-7d6f-429e-ad03-00be2ea11b34","type":"BasicTicker"}},"id":"17a160cf-3648-42ee-b7f1-493b94b74edb","type":"LinearAxis"},{"attributes":{},"id":"c1d8375e-b579-433a-ba3d-6329de0832ae","type":"ResetTool"},{"attributes":{"callback":null},"id":"761af3cb-ea7d-496a-b128-97a4ab2a02dc","type":"DataRange1d"},{"attributes":{},"id":"055eb989-9f98-43f2-bfde-663795cacc45","type":"HelpTool"},{"attributes":{},"id":"81bc34cb-f276-404e-b0f5-19f2c3875b06","type":"LinearScale"},{"attributes":{},"id":"cf3a5dc1-63a6-4580-8135-4eb62569e2f8","type":"LinearScale"},{"attributes":{"plot":{"id":"ade74343-32b2-4c4d-b461-9b7abf418792","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5d314db-7d6f-429e-ad03-00be2ea11b34","type":"BasicTicker"}},"id":"0a80d330-9ccc-4d5b-877d-54e57085751f","type":"Grid"},{"attributes":{"source":{"id":"82666780-5eb8-4d48-9700-89e72b8cf9b0","type":"ColumnDataSource"}},"id":"0ee9d74b-e11a-4275-b650-56211f1faaa6","type":"CDSView"},{"attributes":{"formatter":{"id":"cca5d1c7-1d00-4af7-b4ce-083fd3084a5d","type":"BasicTickFormatter"},"plot":{"id":"ade74343-32b2-4c4d-b461-9b7abf418792","subtype":"Figure","type":"Plot"},"ticker":{"id":"4dcdb469-3aa9-44b7-accf-65e283fcd975","type":"BasicTicker"}},"id":"f49b259f-6015-4e69-8c9e-d3aa37719319","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"33c21dfa-606c-475a-964c-56c8965c2ad2","type":"Title"},{"attributes":{},"id":"4dcdb469-3aa9-44b7-accf-65e283fcd975","type":"BasicTicker"},{"attributes":{},"id":"cca5d1c7-1d00-4af7-b4ce-083fd3084a5d","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"ade74343-32b2-4c4d-b461-9b7abf418792","subtype":"Figure","type":"Plot"},"ticker":{"id":"4dcdb469-3aa9-44b7-accf-65e283fcd975","type":"BasicTicker"}},"id":"ebcb7ac7-a0c7-4892-aeb1-fc380e3e6990","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11b7d969-5112-4d65-9f1e-fec3d6568971","type":"SquareCross"},{"attributes":{},"id":"2bd72fe7-6f45-4e68-a741-53ad40caea31","type":"BasicTickFormatter"}],"root_ids":["ade74343-32b2-4c4d-b461-9b7abf418792"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"00ca74ff-eb91-4edf-9f10-3bb0f0082816","elementid":"cef840d9-a438-4635-b884-15e48d937189","modelid":"ade74343-32b2-4c4d-b461-9b7abf418792"}];
                
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
