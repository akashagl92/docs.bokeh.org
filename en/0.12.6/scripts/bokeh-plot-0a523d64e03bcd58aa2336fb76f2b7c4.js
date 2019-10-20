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
      };var element = document.getElementById("4c903a81-7db3-4918-80e7-80df5d5c3dba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c903a81-7db3-4918-80e7-80df5d5c3dba' but no matching script tag was found. ")
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
                var docs_json = {"98ec008c-a9ca-4005-aaf9-e4aabc102e1c":{"roots":{"references":[{"attributes":{"callback":null},"id":"530c5553-45ae-4a7f-a8b1-8375e12cab93","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"631d4085-046d-4c6c-8f6a-c6338d1a7c47","type":"Title"},{"attributes":{},"id":"789c36ff-9ecc-49d9-9293-1db65a104bf0","type":"LinearScale"},{"attributes":{},"id":"9a59a384-3378-4c86-9fbb-4ac060c10e19","type":"LinearScale"},{"attributes":{"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"}},"id":"c3806543-4ed7-4d38-9143-fc95d4b9c6ee","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"},"ticker":{"id":"e42c22d2-d5fe-4a77-9c4d-5f318639b4c6","type":"BasicTicker"}},"id":"665d5da4-07c3-469c-861e-12d68332905a","type":"Grid"},{"attributes":{},"id":"5ae427e8-01b6-4a66-a563-976817d72d52","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"c2a27f4e-20da-4cc2-9f43-d570f8814ec5","type":"BoxAnnotation"},"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"}},"id":"c80562ba-e0e8-4574-afce-b25514fa01ac","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c2a27f4e-20da-4cc2-9f43-d570f8814ec5","type":"BoxAnnotation"},{"attributes":{},"id":"336d8fae-8942-46a0-9e8e-aae288d2ee57","type":"ToolEvents"},{"attributes":{"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"},"ticker":{"id":"5943b0a8-7328-4530-a638-8c4557d7fe8c","type":"BasicTicker"}},"id":"5e02c1a7-f429-4f69-b12d-7c2a33d359c5","type":"Grid"},{"attributes":{},"id":"e42c22d2-d5fe-4a77-9c4d-5f318639b4c6","type":"BasicTicker"},{"attributes":{"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"}},"id":"23e978d4-48cb-46b8-a74c-8accbda7386e","type":"WheelZoomTool"},{"attributes":{},"id":"e0aa2500-a833-4f0b-a108-7a59bdde1749","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"}},"id":"7be3fb47-b63f-493e-95a9-7bcb1f68f324","type":"HelpTool"},{"attributes":{"callback":null},"id":"3382f3d9-0d34-40c1-b271-36ddfd75ce5a","type":"DataRange1d"},{"attributes":{"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"}},"id":"c00c46e1-513e-4785-a2fe-f51bdb9f3226","type":"SaveTool"},{"attributes":{"formatter":{"id":"e0aa2500-a833-4f0b-a108-7a59bdde1749","type":"BasicTickFormatter"},"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"},"ticker":{"id":"5943b0a8-7328-4530-a638-8c4557d7fe8c","type":"BasicTicker"}},"id":"78ac2943-ab90-4d92-8dfa-84f49f97c40e","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c7bfbb0-5cfd-4ea3-9773-b8967d6102da","type":"Rect"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6fdd165b-4363-4313-944d-589d58ee0d11","type":"Rect"},{"attributes":{"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"}},"id":"96bd7dc0-6b0e-4356-9f54-981a78cd35f9","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"a3730c0b-bdcf-4022-8cb9-a541f910c093","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"5ae427e8-01b6-4a66-a563-976817d72d52","type":"BasicTickFormatter"},"plot":{"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"},"ticker":{"id":"e42c22d2-d5fe-4a77-9c4d-5f318639b4c6","type":"BasicTicker"}},"id":"d85e4c5c-8933-4500-bbc6-6a29aaf09c4c","type":"LinearAxis"},{"attributes":{"below":[{"id":"78ac2943-ab90-4d92-8dfa-84f49f97c40e","type":"LinearAxis"}],"left":[{"id":"d85e4c5c-8933-4500-bbc6-6a29aaf09c4c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"78ac2943-ab90-4d92-8dfa-84f49f97c40e","type":"LinearAxis"},{"id":"5e02c1a7-f429-4f69-b12d-7c2a33d359c5","type":"Grid"},{"id":"d85e4c5c-8933-4500-bbc6-6a29aaf09c4c","type":"LinearAxis"},{"id":"665d5da4-07c3-469c-861e-12d68332905a","type":"Grid"},{"id":"c2a27f4e-20da-4cc2-9f43-d570f8814ec5","type":"BoxAnnotation"},{"id":"0dc2920e-e933-4e15-8ab4-3c638d5f3b1b","type":"GlyphRenderer"}],"title":{"id":"631d4085-046d-4c6c-8f6a-c6338d1a7c47","type":"Title"},"tool_events":{"id":"336d8fae-8942-46a0-9e8e-aae288d2ee57","type":"ToolEvents"},"toolbar":{"id":"9ea1dba8-78dc-432b-bdbc-7ddd95659165","type":"Toolbar"},"x_range":{"id":"530c5553-45ae-4a7f-a8b1-8375e12cab93","type":"DataRange1d"},"x_scale":{"id":"9a59a384-3378-4c86-9fbb-4ac060c10e19","type":"LinearScale"},"y_range":{"id":"3382f3d9-0d34-40c1-b271-36ddfd75ce5a","type":"DataRange1d"},"y_scale":{"id":"789c36ff-9ecc-49d9-9293-1db65a104bf0","type":"LinearScale"}},"id":"ef7cf859-749a-43d3-b953-825c058b7f98","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c3806543-4ed7-4d38-9143-fc95d4b9c6ee","type":"PanTool"},{"id":"23e978d4-48cb-46b8-a74c-8accbda7386e","type":"WheelZoomTool"},{"id":"c80562ba-e0e8-4574-afce-b25514fa01ac","type":"BoxZoomTool"},{"id":"c00c46e1-513e-4785-a2fe-f51bdb9f3226","type":"SaveTool"},{"id":"96bd7dc0-6b0e-4356-9f54-981a78cd35f9","type":"ResetTool"},{"id":"7be3fb47-b63f-493e-95a9-7bcb1f68f324","type":"HelpTool"}]},"id":"9ea1dba8-78dc-432b-bdbc-7ddd95659165","type":"Toolbar"},{"attributes":{},"id":"5943b0a8-7328-4530-a638-8c4557d7fe8c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a3730c0b-bdcf-4022-8cb9-a541f910c093","type":"ColumnDataSource"},"glyph":{"id":"4c7bfbb0-5cfd-4ea3-9773-b8967d6102da","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6fdd165b-4363-4313-944d-589d58ee0d11","type":"Rect"},"selection_glyph":null},"id":"0dc2920e-e933-4e15-8ab4-3c638d5f3b1b","type":"GlyphRenderer"}],"root_ids":["ef7cf859-749a-43d3-b953-825c058b7f98"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"98ec008c-a9ca-4005-aaf9-e4aabc102e1c","elementid":"4c903a81-7db3-4918-80e7-80df5d5c3dba","modelid":"ef7cf859-749a-43d3-b953-825c058b7f98"}];
                
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
