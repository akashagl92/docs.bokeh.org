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
      };var element = document.getElementById("b0bf6ef8-fc9a-4418-92b6-f0780c9e0da3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b0bf6ef8-fc9a-4418-92b6-f0780c9e0da3' but no matching script tag was found. ")
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
                var docs_json = {"e72c6ec1-3f6f-4d5e-9c3b-3f70e56cfd6e":{"roots":{"references":[{"attributes":{"formatter":{"id":"b49cf948-a757-42aa-a921-267c41ba8337","type":"BasicTickFormatter"},"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1613705-52bf-4519-baba-fc536b3a6d90","type":"BasicTicker"}},"id":"5b293c38-4737-4803-ba8a-c1a1e92abd01","type":"LinearAxis"},{"attributes":{},"id":"b28a7151-b472-4bc7-8070-79e6d1828e7b","type":"LinearScale"},{"attributes":{"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"}},"id":"15bd56a8-ef5e-4db3-baae-3c6fc92e2d11","type":"HelpTool"},{"attributes":{"overlay":{"id":"65caecff-4c90-4d98-9fc3-f0237e735794","type":"BoxAnnotation"},"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"}},"id":"f8d0115a-b78d-4f57-9a0f-9e13341bb036","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color","fill_alpha","line_alpha","line_color"],"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"94a3bd6b-fc21-488f-a403-dcae864e8ac3","type":"ColumnDataSource"},{"attributes":{},"id":"76e1c81e-49aa-4733-beaa-9a25ce728059","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"2285c03b-5b5a-4ee5-98dc-5869478f16dc","type":"Patches"},{"attributes":{"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"}},"id":"81ed56d1-e263-483b-890a-c4ef5eaaf00b","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1613705-52bf-4519-baba-fc536b3a6d90","type":"BasicTicker"}},"id":"77b4494e-c9bd-4ca8-8498-38df1f3b9644","type":"Grid"},{"attributes":{"data_source":{"id":"94a3bd6b-fc21-488f-a403-dcae864e8ac3","type":"ColumnDataSource"},"glyph":{"id":"67614deb-689b-411f-8075-cc25c4068d7d","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2285c03b-5b5a-4ee5-98dc-5869478f16dc","type":"Patches"},"selection_glyph":null},"id":"92206c3f-0a3c-4863-b387-9f1f91c5fbba","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"67614deb-689b-411f-8075-cc25c4068d7d","type":"Patches"},{"attributes":{},"id":"be6fc510-717e-4d7d-b995-c5821acd2164","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"}},"id":"26c573a2-d2a3-4fa2-af4f-3c5706f4c41d","type":"PanTool"},{"attributes":{"callback":null},"id":"8da0c395-78f1-49f0-824c-ec5077561801","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"26c573a2-d2a3-4fa2-af4f-3c5706f4c41d","type":"PanTool"},{"id":"81ed56d1-e263-483b-890a-c4ef5eaaf00b","type":"WheelZoomTool"},{"id":"f8d0115a-b78d-4f57-9a0f-9e13341bb036","type":"BoxZoomTool"},{"id":"bc1c8ce2-97e1-4477-89a7-cf3ccdfa6e70","type":"SaveTool"},{"id":"7acc871d-bbd8-4a1f-a3cd-621baae2701a","type":"ResetTool"},{"id":"15bd56a8-ef5e-4db3-baae-3c6fc92e2d11","type":"HelpTool"}]},"id":"9b9cc710-41d8-4d71-888f-20cd8e02a218","type":"Toolbar"},{"attributes":{},"id":"5a3a4ae9-1d9b-4f95-8753-32105a5d1f46","type":"ToolEvents"},{"attributes":{},"id":"b49cf948-a757-42aa-a921-267c41ba8337","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"e019847b-9505-4225-a99a-7e920d8f9f22","type":"Title"},{"attributes":{},"id":"cf165406-b28a-4f34-8518-65e242e0802c","type":"BasicTicker"},{"attributes":{"below":[{"id":"d8e3e42d-7f3b-4fae-a9cc-de49e708cb8f","type":"LinearAxis"}],"left":[{"id":"5b293c38-4737-4803-ba8a-c1a1e92abd01","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d8e3e42d-7f3b-4fae-a9cc-de49e708cb8f","type":"LinearAxis"},{"id":"384dcec5-ab88-4bd1-98e0-225e66fc0be2","type":"Grid"},{"id":"5b293c38-4737-4803-ba8a-c1a1e92abd01","type":"LinearAxis"},{"id":"77b4494e-c9bd-4ca8-8498-38df1f3b9644","type":"Grid"},{"id":"65caecff-4c90-4d98-9fc3-f0237e735794","type":"BoxAnnotation"},{"id":"92206c3f-0a3c-4863-b387-9f1f91c5fbba","type":"GlyphRenderer"}],"title":{"id":"e019847b-9505-4225-a99a-7e920d8f9f22","type":"Title"},"tool_events":{"id":"5a3a4ae9-1d9b-4f95-8753-32105a5d1f46","type":"ToolEvents"},"toolbar":{"id":"9b9cc710-41d8-4d71-888f-20cd8e02a218","type":"Toolbar"},"x_range":{"id":"8da0c395-78f1-49f0-824c-ec5077561801","type":"DataRange1d"},"x_scale":{"id":"b28a7151-b472-4bc7-8070-79e6d1828e7b","type":"LinearScale"},"y_range":{"id":"e968634a-4e29-4953-ae38-fc50ce1a360e","type":"DataRange1d"},"y_scale":{"id":"76e1c81e-49aa-4733-beaa-9a25ce728059","type":"LinearScale"}},"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"}},"id":"bc1c8ce2-97e1-4477-89a7-cf3ccdfa6e70","type":"SaveTool"},{"attributes":{},"id":"b1613705-52bf-4519-baba-fc536b3a6d90","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"65caecff-4c90-4d98-9fc3-f0237e735794","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"e968634a-4e29-4953-ae38-fc50ce1a360e","type":"DataRange1d"},{"attributes":{"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"}},"id":"7acc871d-bbd8-4a1f-a3cd-621baae2701a","type":"ResetTool"},{"attributes":{"formatter":{"id":"be6fc510-717e-4d7d-b995-c5821acd2164","type":"BasicTickFormatter"},"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf165406-b28a-4f34-8518-65e242e0802c","type":"BasicTicker"}},"id":"d8e3e42d-7f3b-4fae-a9cc-de49e708cb8f","type":"LinearAxis"},{"attributes":{"plot":{"id":"e074d3d0-01ca-44ba-92ca-f940643d6ebc","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf165406-b28a-4f34-8518-65e242e0802c","type":"BasicTicker"}},"id":"384dcec5-ab88-4bd1-98e0-225e66fc0be2","type":"Grid"}],"root_ids":["e074d3d0-01ca-44ba-92ca-f940643d6ebc"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"e72c6ec1-3f6f-4d5e-9c3b-3f70e56cfd6e","elementid":"b0bf6ef8-fc9a-4418-92b6-f0780c9e0da3","modelid":"e074d3d0-01ca-44ba-92ca-f940643d6ebc"}];
                
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
