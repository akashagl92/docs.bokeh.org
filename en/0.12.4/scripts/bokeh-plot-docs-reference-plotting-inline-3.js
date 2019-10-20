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
      };var element = document.getElementById("a18f58da-1e91-463a-ae6c-01144c4ffefe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a18f58da-1e91-463a-ae6c-01144c4ffefe' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"a4fa8191-23f4-4f73-bf9f-4640fc371561":{"roots":{"references":[{"attributes":{"data_source":{"id":"56a3df32-0f85-405d-80b4-8f7ad219bb18","type":"ColumnDataSource"},"glyph":{"id":"a274778d-b42d-49e3-9d09-34a2b192c4c0","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":{"id":"51edbabe-4387-4c1c-b42e-13f0760e57cd","type":"CircleCross"},"selection_glyph":null},"id":"8df440a5-cd90-4406-8c58-ab749ddbb10a","type":"GlyphRenderer"},{"attributes":{},"id":"a628c926-5be2-4399-b74d-4cf904f13323","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5a1495b0-43f1-4cac-887f-c3f7665dba2d","type":"PanTool"},{"id":"642a8d86-7e22-4ac9-bc00-e6cbed889901","type":"WheelZoomTool"},{"id":"ad234623-e956-4037-b829-76a26d5d68a2","type":"BoxZoomTool"},{"id":"0638731b-b1a9-4bb3-ba31-9b5122ad44e0","type":"SaveTool"},{"id":"199c36fe-764d-492d-a1d7-1ce10e2ab388","type":"ResetTool"},{"id":"7db98f94-e1d0-4d4b-9a72-787a9dd6f20b","type":"HelpTool"}]},"id":"cd1871d6-69e1-402c-8f93-b59a592b201f","type":"Toolbar"},{"attributes":{"callback":null},"id":"5e9fb464-bdbd-4492-ad33-802c892b9542","type":"DataRange1d"},{"attributes":{"overlay":{"id":"edeab51f-6df4-4c03-9158-4a8bd0547252","type":"BoxAnnotation"},"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"}},"id":"ad234623-e956-4037-b829-76a26d5d68a2","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"}},"id":"199c36fe-764d-492d-a1d7-1ce10e2ab388","type":"ResetTool"},{"attributes":{"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"}},"id":"5a1495b0-43f1-4cac-887f-c3f7665dba2d","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"},"ticker":{"id":"76fdacab-673f-42be-b33c-ae45cb1506d3","type":"BasicTicker"}},"id":"aa9a1577-dfa2-4912-971a-0c96b4f4aaf5","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a274778d-b42d-49e3-9d09-34a2b192c4c0","type":"CircleCross"},{"attributes":{},"id":"37f94c25-b8b0-4287-aa57-258610a81b97","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"56a3df32-0f85-405d-80b4-8f7ad219bb18","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"}},"id":"7db98f94-e1d0-4d4b-9a72-787a9dd6f20b","type":"HelpTool"},{"attributes":{},"id":"49da3bd1-e97e-42f3-92ce-4317e85441c3","type":"ToolEvents"},{"attributes":{},"id":"cdf8c12a-aeee-4161-a77a-228fcc6c4f91","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a628c926-5be2-4399-b74d-4cf904f13323","type":"BasicTickFormatter"},"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdf8c12a-aeee-4161-a77a-228fcc6c4f91","type":"BasicTicker"}},"id":"286cd0c6-6a95-400b-91e0-8616363d022a","type":"LinearAxis"},{"attributes":{"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdf8c12a-aeee-4161-a77a-228fcc6c4f91","type":"BasicTicker"}},"id":"9f6915a6-a53c-4408-b741-4e0758ad9a88","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"edeab51f-6df4-4c03-9158-4a8bd0547252","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"37f94c25-b8b0-4287-aa57-258610a81b97","type":"BasicTickFormatter"},"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"},"ticker":{"id":"76fdacab-673f-42be-b33c-ae45cb1506d3","type":"BasicTicker"}},"id":"72e6435f-dc2a-4e8b-a585-dfc6ebce422e","type":"LinearAxis"},{"attributes":{"below":[{"id":"286cd0c6-6a95-400b-91e0-8616363d022a","type":"LinearAxis"}],"left":[{"id":"72e6435f-dc2a-4e8b-a585-dfc6ebce422e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"286cd0c6-6a95-400b-91e0-8616363d022a","type":"LinearAxis"},{"id":"9f6915a6-a53c-4408-b741-4e0758ad9a88","type":"Grid"},{"id":"72e6435f-dc2a-4e8b-a585-dfc6ebce422e","type":"LinearAxis"},{"id":"aa9a1577-dfa2-4912-971a-0c96b4f4aaf5","type":"Grid"},{"id":"edeab51f-6df4-4c03-9158-4a8bd0547252","type":"BoxAnnotation"},{"id":"8df440a5-cd90-4406-8c58-ab749ddbb10a","type":"GlyphRenderer"}],"title":{"id":"19f5d25a-d10a-44e3-86c9-faae35c01662","type":"Title"},"tool_events":{"id":"49da3bd1-e97e-42f3-92ce-4317e85441c3","type":"ToolEvents"},"toolbar":{"id":"cd1871d6-69e1-402c-8f93-b59a592b201f","type":"Toolbar"},"x_range":{"id":"c40e336f-add3-41a1-8314-d46151d92f5a","type":"DataRange1d"},"y_range":{"id":"5e9fb464-bdbd-4492-ad33-802c892b9542","type":"DataRange1d"}},"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"}},"id":"0638731b-b1a9-4bb3-ba31-9b5122ad44e0","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"19f5d25a-d10a-44e3-86c9-faae35c01662","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"51edbabe-4387-4c1c-b42e-13f0760e57cd","type":"CircleCross"},{"attributes":{"callback":null},"id":"c40e336f-add3-41a1-8314-d46151d92f5a","type":"DataRange1d"},{"attributes":{},"id":"76fdacab-673f-42be-b33c-ae45cb1506d3","type":"BasicTicker"},{"attributes":{"plot":{"id":"19aa6e05-a380-41ad-9633-5b8b4d176a75","subtype":"Figure","type":"Plot"}},"id":"642a8d86-7e22-4ac9-bc00-e6cbed889901","type":"WheelZoomTool"}],"root_ids":["19aa6e05-a380-41ad-9633-5b8b4d176a75"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a4fa8191-23f4-4f73-bf9f-4640fc371561","elementid":"a18f58da-1e91-463a-ae6c-01144c4ffefe","modelid":"19aa6e05-a380-41ad-9633-5b8b4d176a75"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
