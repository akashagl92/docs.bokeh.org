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
      };var element = document.getElementById("1465e47c-5c7d-4123-8150-97ab62a637ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1465e47c-5c7d-4123-8150-97ab62a637ac' but no matching script tag was found. ")
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
                    var docs_json = {"e99d73c3-2d97-44f6-8479-c556b7747a98":{"roots":{"references":[{"attributes":{"plot":{"id":"bad826da-49ee-4b2b-b383-ea4d881f9bd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe27f1eb-aa01-40a2-b69e-0bf593e9189b","type":"BasicTicker"}},"id":"5d134e39-adcb-4128-8bc1-33ac00a68e14","type":"Grid"},{"attributes":{"formatter":{"id":"70f742f8-ac6e-4962-a409-ea9984ba16e9","type":"BasicTickFormatter"},"plot":{"id":"bad826da-49ee-4b2b-b383-ea4d881f9bd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"e038cb18-1238-48d8-b8e3-a48a4717b64b","type":"BasicTicker"}},"id":"e0c31e9f-d47b-4f05-be7a-a02633a6a795","type":"LinearAxis"},{"attributes":{},"id":"e038cb18-1238-48d8-b8e3-a48a4717b64b","type":"BasicTicker"},{"attributes":{"source":{"id":"dd74d534-58ac-4a05-b6f3-52e190bd8dc1","type":"ColumnDataSource"}},"id":"71b5bc97-338c-452f-873a-1973ec667cf6","type":"CDSView"},{"attributes":{},"id":"5006c4da-f9be-40c0-ba98-c1daeb1da4f5","type":"HelpTool"},{"attributes":{},"id":"617b3151-deb2-4678-8bb3-4a7b4b9c51fa","type":"ResetTool"},{"attributes":{},"id":"e558e0f9-f51c-498f-91a7-061a82ddb429","type":"SaveTool"},{"attributes":{"below":[{"id":"ad3bd73f-e7d1-4e2f-981e-f2d072741b6d","type":"LinearAxis"}],"left":[{"id":"e0c31e9f-d47b-4f05-be7a-a02633a6a795","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ad3bd73f-e7d1-4e2f-981e-f2d072741b6d","type":"LinearAxis"},{"id":"5d134e39-adcb-4128-8bc1-33ac00a68e14","type":"Grid"},{"id":"e0c31e9f-d47b-4f05-be7a-a02633a6a795","type":"LinearAxis"},{"id":"90d26dfe-09d4-4970-9136-c786c8d025d3","type":"Grid"},{"id":"9f5c62d4-61db-4bff-ab56-30f67db83f9b","type":"BoxAnnotation"},{"id":"db59d2d6-63f9-4a02-9c6d-d3c2818ba364","type":"GlyphRenderer"}],"title":{"id":"27a70737-1411-4d7a-bcc2-dfbb0409a977","type":"Title"},"toolbar":{"id":"3ad3f789-54e3-4253-b031-9767ad32ee55","type":"Toolbar"},"x_range":{"id":"ac75fd8b-94c5-4e6d-b5de-004c8c425684","type":"DataRange1d"},"x_scale":{"id":"2b881516-4f56-47e1-86a4-cacd922fd0e5","type":"LinearScale"},"y_range":{"id":"5861865c-7a46-46e4-9cfe-d6dc9c6b4661","type":"DataRange1d"},"y_scale":{"id":"9021e641-a35b-4cdc-8199-8d56a6c44757","type":"LinearScale"}},"id":"bad826da-49ee-4b2b-b383-ea4d881f9bd5","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"9f5c62d4-61db-4bff-ab56-30f67db83f9b","type":"BoxAnnotation"}},"id":"e3df634c-3910-4f14-a976-45cadb8aa770","type":"BoxZoomTool"},{"attributes":{},"id":"4dfaf730-648f-4807-8396-8bcb9fb1e509","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e7e3a4b1-dd70-4487-bfbf-1a00919bfbcb","type":"PanTool"},{"id":"4dfaf730-648f-4807-8396-8bcb9fb1e509","type":"WheelZoomTool"},{"id":"e3df634c-3910-4f14-a976-45cadb8aa770","type":"BoxZoomTool"},{"id":"e558e0f9-f51c-498f-91a7-061a82ddb429","type":"SaveTool"},{"id":"617b3151-deb2-4678-8bb3-4a7b4b9c51fa","type":"ResetTool"},{"id":"5006c4da-f9be-40c0-ba98-c1daeb1da4f5","type":"HelpTool"}]},"id":"3ad3f789-54e3-4253-b031-9767ad32ee55","type":"Toolbar"},{"attributes":{"data_source":{"id":"dd74d534-58ac-4a05-b6f3-52e190bd8dc1","type":"ColumnDataSource"},"glyph":{"id":"1d580d5e-6276-4df0-aa34-92e794e9441d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f0f13daa-8416-4cd3-ad1f-14dad21a3c18","type":"Circle"},"selection_glyph":null,"view":{"id":"71b5bc97-338c-452f-873a-1973ec667cf6","type":"CDSView"}},"id":"db59d2d6-63f9-4a02-9c6d-d3c2818ba364","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"ac75fd8b-94c5-4e6d-b5de-004c8c425684","type":"DataRange1d"},{"attributes":{},"id":"e7e3a4b1-dd70-4487-bfbf-1a00919bfbcb","type":"PanTool"},{"attributes":{},"id":"fe27f1eb-aa01-40a2-b69e-0bf593e9189b","type":"BasicTicker"},{"attributes":{},"id":"70f742f8-ac6e-4962-a409-ea9984ba16e9","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9f5c62d4-61db-4bff-ab56-30f67db83f9b","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f0f13daa-8416-4cd3-ad1f-14dad21a3c18","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"dd74d534-58ac-4a05-b6f3-52e190bd8dc1","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"20ee00a5-7a42-4e2f-af3b-63b4254d2182","type":"BasicTickFormatter"},"plot":{"id":"bad826da-49ee-4b2b-b383-ea4d881f9bd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe27f1eb-aa01-40a2-b69e-0bf593e9189b","type":"BasicTicker"}},"id":"ad3bd73f-e7d1-4e2f-981e-f2d072741b6d","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"27a70737-1411-4d7a-bcc2-dfbb0409a977","type":"Title"},{"attributes":{"callback":null},"id":"5861865c-7a46-46e4-9cfe-d6dc9c6b4661","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d580d5e-6276-4df0-aa34-92e794e9441d","type":"Circle"},{"attributes":{},"id":"2b881516-4f56-47e1-86a4-cacd922fd0e5","type":"LinearScale"},{"attributes":{},"id":"20ee00a5-7a42-4e2f-af3b-63b4254d2182","type":"BasicTickFormatter"},{"attributes":{},"id":"9021e641-a35b-4cdc-8199-8d56a6c44757","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"bad826da-49ee-4b2b-b383-ea4d881f9bd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"e038cb18-1238-48d8-b8e3-a48a4717b64b","type":"BasicTicker"}},"id":"90d26dfe-09d4-4970-9136-c786c8d025d3","type":"Grid"}],"root_ids":["bad826da-49ee-4b2b-b383-ea4d881f9bd5"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e99d73c3-2d97-44f6-8479-c556b7747a98","elementid":"1465e47c-5c7d-4123-8150-97ab62a637ac","modelid":"bad826da-49ee-4b2b-b383-ea4d881f9bd5"}];
                
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
