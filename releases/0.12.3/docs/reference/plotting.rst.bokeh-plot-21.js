document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("f8ffc158-69a6-40f8-8160-273610d9a76b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f8ffc158-69a6-40f8-8160-273610d9a76b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"66eae5ab-d90d-4f7a-b643-4a073630bdbe":{"roots":{"references":[{"attributes":{"callback":null},"id":"2790ba8c-a759-4507-8ec0-aa1643a2bd64","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e4c5513e-c94b-4f8b-b4e5-f6cd004fd3d1","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"}},"id":"5531f299-1f27-4289-aee4-4c49a638c721","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4daee66b-8081-46ff-ad1c-dda0383ea188","type":"BasicTicker"}},"id":"87bf642d-6954-4eb3-b16f-ffa0aef9b348","type":"Grid"},{"attributes":{"callback":null},"id":"298c0e9f-7f67-4eb7-8a2e-4243ed161381","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"fd7d6b06-b2db-4283-9cfb-c0fc7c254b50","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"49b0aaad-c088-46ee-a4d5-790f245d57a5","type":"SquareCross"},{"attributes":{},"id":"4daee66b-8081-46ff-ad1c-dda0383ea188","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9ef00b9-fd9b-4630-9b29-615f2d7680db","type":"SquareCross"},{"attributes":{"below":[{"id":"20f112c1-d3c6-4e72-9875-0aa0f402591e","type":"LinearAxis"}],"left":[{"id":"f2629b04-f4f0-477a-b058-e3fb52865547","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"20f112c1-d3c6-4e72-9875-0aa0f402591e","type":"LinearAxis"},{"id":"5e47fd98-785a-424a-be22-396a8639c342","type":"Grid"},{"id":"f2629b04-f4f0-477a-b058-e3fb52865547","type":"LinearAxis"},{"id":"87bf642d-6954-4eb3-b16f-ffa0aef9b348","type":"Grid"},{"id":"e4c5513e-c94b-4f8b-b4e5-f6cd004fd3d1","type":"BoxAnnotation"},{"id":"5f8b9ef9-df5e-400f-a16f-5c7d803fc124","type":"GlyphRenderer"}],"title":{"id":"738f6e77-7b11-4e81-a3d9-ee06eecfa015","type":"Title"},"tool_events":{"id":"7229acf4-e6f9-4c40-8775-25653dea2fb9","type":"ToolEvents"},"toolbar":{"id":"d783ee61-1749-4af0-a5da-c827713afb40","type":"Toolbar"},"x_range":{"id":"298c0e9f-7f67-4eb7-8a2e-4243ed161381","type":"DataRange1d"},"y_range":{"id":"2790ba8c-a759-4507-8ec0-aa1643a2bd64","type":"DataRange1d"}},"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":null},"id":"738f6e77-7b11-4e81-a3d9-ee06eecfa015","type":"Title"},{"attributes":{"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"}},"id":"c814529a-e1e2-41ea-a0fb-8e5908d24b3d","type":"SaveTool"},{"attributes":{},"id":"e6df0333-f661-461a-88fa-98fe22872c96","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5531f299-1f27-4289-aee4-4c49a638c721","type":"PanTool"},{"id":"44a75645-c407-4397-b701-2a566c7df9f7","type":"WheelZoomTool"},{"id":"0564204b-3cd2-4f61-80bc-8773127ec854","type":"BoxZoomTool"},{"id":"c814529a-e1e2-41ea-a0fb-8e5908d24b3d","type":"SaveTool"},{"id":"bc730341-ad5b-47ff-b54d-68e20da8c437","type":"ResetTool"},{"id":"f0d97985-58de-47a9-bfc8-976bc46f9236","type":"HelpTool"}]},"id":"d783ee61-1749-4af0-a5da-c827713afb40","type":"Toolbar"},{"attributes":{},"id":"534aaac9-1c4c-4426-9856-f9d3311c6508","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"fd7d6b06-b2db-4283-9cfb-c0fc7c254b50","type":"ColumnDataSource"},"glyph":{"id":"49b0aaad-c088-46ee-a4d5-790f245d57a5","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":{"id":"d9ef00b9-fd9b-4630-9b29-615f2d7680db","type":"SquareCross"},"selection_glyph":null},"id":"5f8b9ef9-df5e-400f-a16f-5c7d803fc124","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"e6df0333-f661-461a-88fa-98fe22872c96","type":"BasicTickFormatter"},"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4daee66b-8081-46ff-ad1c-dda0383ea188","type":"BasicTicker"}},"id":"f2629b04-f4f0-477a-b058-e3fb52865547","type":"LinearAxis"},{"attributes":{"formatter":{"id":"534aaac9-1c4c-4426-9856-f9d3311c6508","type":"BasicTickFormatter"},"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6572bb38-884e-4852-a013-db0c4437d395","type":"BasicTicker"}},"id":"20f112c1-d3c6-4e72-9875-0aa0f402591e","type":"LinearAxis"},{"attributes":{"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"}},"id":"44a75645-c407-4397-b701-2a566c7df9f7","type":"WheelZoomTool"},{"attributes":{},"id":"7229acf4-e6f9-4c40-8775-25653dea2fb9","type":"ToolEvents"},{"attributes":{"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"}},"id":"f0d97985-58de-47a9-bfc8-976bc46f9236","type":"HelpTool"},{"attributes":{"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6572bb38-884e-4852-a013-db0c4437d395","type":"BasicTicker"}},"id":"5e47fd98-785a-424a-be22-396a8639c342","type":"Grid"},{"attributes":{"overlay":{"id":"e4c5513e-c94b-4f8b-b4e5-f6cd004fd3d1","type":"BoxAnnotation"},"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"}},"id":"0564204b-3cd2-4f61-80bc-8773127ec854","type":"BoxZoomTool"},{"attributes":{},"id":"6572bb38-884e-4852-a013-db0c4437d395","type":"BasicTicker"},{"attributes":{"plot":{"id":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0","subtype":"Figure","type":"Plot"}},"id":"bc730341-ad5b-47ff-b54d-68e20da8c437","type":"ResetTool"}],"root_ids":["bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"66eae5ab-d90d-4f7a-b643-4a073630bdbe","elementid":"f8ffc158-69a6-40f8-8160-273610d9a76b","modelid":"bd40abfb-dd2c-4631-b9b5-3d9e6f700ce0"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});