(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("446a876f-ba88-476d-a0dc-a8dc4ac800ce");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '446a876f-ba88-476d-a0dc-a8dc4ac800ce' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"83689233-36b0-4c2a-986f-25e7f408faea":{"roots":{"references":[{"attributes":{"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"}},"id":"85828101-2425-4ff4-9da5-8a142f5a0199","type":"PanTool"},{"attributes":{},"id":"e669c6f5-293d-44f8-af88-c3cc175f277c","type":"BasicTicker"},{"attributes":{"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"}},"id":"8ab9f670-22b3-4c87-88b3-2edd57514235","type":"HelpTool"},{"attributes":{},"id":"f3dc4662-c072-446b-b748-64c075616d68","type":"BasicTickFormatter"},{"attributes":{},"id":"effb8bee-5fa9-4662-a5fc-f9a0165f1a35","type":"LinearScale"},{"attributes":{},"id":"cb3dacfd-ba85-4bf0-9446-9d1713df5735","type":"BasicTicker"},{"attributes":{"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"}},"id":"d8f346ac-55c8-430c-8b4e-73e9e01bd439","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"85828101-2425-4ff4-9da5-8a142f5a0199","type":"PanTool"},{"id":"73b0a4a0-966e-4e7a-90af-52d786598f24","type":"WheelZoomTool"},{"id":"f5d5ae80-4fca-498c-ba06-c41a154a71e1","type":"BoxZoomTool"},{"id":"d8f346ac-55c8-430c-8b4e-73e9e01bd439","type":"SaveTool"},{"id":"a8c83d1c-c9e2-4c55-be81-f9612df6d8bc","type":"ResetTool"},{"id":"8ab9f670-22b3-4c87-88b3-2edd57514235","type":"HelpTool"}]},"id":"2dde80ee-71be-4b2f-9dbd-038d48c861d6","type":"Toolbar"},{"attributes":{},"id":"b1da7dfc-d8f7-47bd-baa4-5a44278737a9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"931ac50a-6903-483a-82ba-f3af09c2ad0f","type":"DataRange1d"},{"attributes":{"callback":null},"id":"3b4e1d0d-bae1-4a22-84b1-3259285b4211","type":"DataRange1d"},{"attributes":{"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"}},"id":"73b0a4a0-966e-4e7a-90af-52d786598f24","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"d563216d-57da-4b2b-a5f0-152f1d76221a","type":"ColumnDataSource"},"glyph":{"id":"459808c9-8cb7-432f-80aa-98d2e31af1a2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0c1d255a-5c2f-4834-839f-f804b54b1eef","type":"Circle"},"selection_glyph":null},"id":"dd488708-e071-4d82-97cd-55ea88cc1a06","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"459808c9-8cb7-432f-80aa-98d2e31af1a2","type":"Circle"},{"attributes":{"formatter":{"id":"f3dc4662-c072-446b-b748-64c075616d68","type":"BasicTickFormatter"},"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb3dacfd-ba85-4bf0-9446-9d1713df5735","type":"BasicTicker"}},"id":"25d66f63-83bd-48ae-80fe-a70dd7f44354","type":"LinearAxis"},{"attributes":{"below":[{"id":"5e59817f-3bda-4227-858c-cebfd5cb980d","type":"LinearAxis"}],"left":[{"id":"25d66f63-83bd-48ae-80fe-a70dd7f44354","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5e59817f-3bda-4227-858c-cebfd5cb980d","type":"LinearAxis"},{"id":"c49161a4-c26c-41b8-b62a-32cd3b476e70","type":"Grid"},{"id":"25d66f63-83bd-48ae-80fe-a70dd7f44354","type":"LinearAxis"},{"id":"acc814c8-c467-442a-b03b-219f9c1e6a77","type":"Grid"},{"id":"c5f5e1b9-fddb-4eac-a30d-56dbc65c0b2b","type":"BoxAnnotation"},{"id":"dd488708-e071-4d82-97cd-55ea88cc1a06","type":"GlyphRenderer"}],"title":{"id":"71fea2d8-0bb7-4732-b5eb-16200c93b87e","type":"Title"},"tool_events":{"id":"10186077-19f3-4db8-bb97-ac5ab2e30c72","type":"ToolEvents"},"toolbar":{"id":"2dde80ee-71be-4b2f-9dbd-038d48c861d6","type":"Toolbar"},"x_range":{"id":"3b4e1d0d-bae1-4a22-84b1-3259285b4211","type":"DataRange1d"},"x_scale":{"id":"effb8bee-5fa9-4662-a5fc-f9a0165f1a35","type":"LinearScale"},"y_range":{"id":"931ac50a-6903-483a-82ba-f3af09c2ad0f","type":"DataRange1d"},"y_scale":{"id":"a16a88ed-262c-4d7a-b7be-772a2bd03be7","type":"LinearScale"}},"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a16a88ed-262c-4d7a-b7be-772a2bd03be7","type":"LinearScale"},{"attributes":{"formatter":{"id":"b1da7dfc-d8f7-47bd-baa4-5a44278737a9","type":"BasicTickFormatter"},"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e669c6f5-293d-44f8-af88-c3cc175f277c","type":"BasicTicker"}},"id":"5e59817f-3bda-4227-858c-cebfd5cb980d","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c5f5e1b9-fddb-4eac-a30d-56dbc65c0b2b","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"d563216d-57da-4b2b-a5f0-152f1d76221a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"}},"id":"a8c83d1c-c9e2-4c55-be81-f9612df6d8bc","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c1d255a-5c2f-4834-839f-f804b54b1eef","type":"Circle"},{"attributes":{"overlay":{"id":"c5f5e1b9-fddb-4eac-a30d-56dbc65c0b2b","type":"BoxAnnotation"},"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"}},"id":"f5d5ae80-4fca-498c-ba06-c41a154a71e1","type":"BoxZoomTool"},{"attributes":{},"id":"10186077-19f3-4db8-bb97-ac5ab2e30c72","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb3dacfd-ba85-4bf0-9446-9d1713df5735","type":"BasicTicker"}},"id":"acc814c8-c467-442a-b03b-219f9c1e6a77","type":"Grid"},{"attributes":{"plot":{"id":"0d62dcca-b721-4d6a-9fa7-6187aecc956f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e669c6f5-293d-44f8-af88-c3cc175f277c","type":"BasicTicker"}},"id":"c49161a4-c26c-41b8-b62a-32cd3b476e70","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"71fea2d8-0bb7-4732-b5eb-16200c93b87e","type":"Title"}],"root_ids":["0d62dcca-b721-4d6a-9fa7-6187aecc956f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"83689233-36b0-4c2a-986f-25e7f408faea","elementid":"446a876f-ba88-476d-a0dc-a8dc4ac800ce","modelid":"0d62dcca-b721-4d6a-9fa7-6187aecc956f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
