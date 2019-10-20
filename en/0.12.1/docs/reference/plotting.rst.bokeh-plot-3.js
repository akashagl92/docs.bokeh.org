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
      };var element = document.getElementById("fff71c5a-fa8d-456b-b41e-75dc9206b00c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fff71c5a-fa8d-456b-b41e-75dc9206b00c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f08bdd8f-9ba5-4cdb-8f08-63223a227294":{"roots":{"references":[{"attributes":{"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"}},"id":"bce5c860-eee5-4474-b7fd-16e1e15075f4","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f222fe8a-ccce-42d3-b790-d14ed2048266","type":"PanTool"},{"id":"bce5c860-eee5-4474-b7fd-16e1e15075f4","type":"WheelZoomTool"},{"id":"ca7bd78a-28fa-44ed-a069-3ecb6b39571a","type":"BoxZoomTool"},{"id":"db7c8cc1-2251-46ea-9555-99c738a144a9","type":"SaveTool"},{"id":"2c7c3830-d986-4d99-a3d6-1455b3008de3","type":"ResetTool"},{"id":"e053239f-03ee-49de-9503-1517e3c14561","type":"HelpTool"}]},"id":"19ff3969-6b6c-4113-93d6-5a69ff391fac","type":"Toolbar"},{"attributes":{"callback":null},"id":"a628391d-966c-4f09-bc5e-70d0c5f97e9d","type":"DataRange1d"},{"attributes":{},"id":"e1f0b483-d445-4af8-879c-68abf5d9d452","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6d96cf25-47ff-498d-8fc5-0f44d903b17f","type":"LinearAxis"}],"left":[{"id":"5dedc863-563b-42e1-b012-ae2ce4e2f7c0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6d96cf25-47ff-498d-8fc5-0f44d903b17f","type":"LinearAxis"},{"id":"fdacd18f-272b-40e0-b17a-9a304b1a7602","type":"Grid"},{"id":"5dedc863-563b-42e1-b012-ae2ce4e2f7c0","type":"LinearAxis"},{"id":"77953325-1f58-446d-9258-6b8b4834ccb2","type":"Grid"},{"id":"9d0a4c01-716f-4ec3-8fa2-f8202437a1ea","type":"BoxAnnotation"},{"id":"be75a8d7-b91d-48db-bca7-6f201b15fa0f","type":"GlyphRenderer"}],"title":{"id":"3485fbd4-363c-4020-9eeb-3735c3992000","type":"Title"},"tool_events":{"id":"0e2c3d1a-728a-45c6-8135-2790f6a119d2","type":"ToolEvents"},"toolbar":{"id":"19ff3969-6b6c-4113-93d6-5a69ff391fac","type":"Toolbar"},"x_range":{"id":"7cd1aa37-14e4-4122-b89a-bc7562f95628","type":"DataRange1d"},"y_range":{"id":"a628391d-966c-4f09-bc5e-70d0c5f97e9d","type":"DataRange1d"}},"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"}},"id":"2c7c3830-d986-4d99-a3d6-1455b3008de3","type":"ResetTool"},{"attributes":{"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"},"ticker":{"id":"a09dd3cd-8416-44d0-b5f2-2313e6f61233","type":"BasicTicker"}},"id":"fdacd18f-272b-40e0-b17a-9a304b1a7602","type":"Grid"},{"attributes":{"formatter":{"id":"5bfc5b96-3d8e-44db-ac7e-df57c2a76265","type":"BasicTickFormatter"},"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"},"ticker":{"id":"a09dd3cd-8416-44d0-b5f2-2313e6f61233","type":"BasicTicker"}},"id":"6d96cf25-47ff-498d-8fc5-0f44d903b17f","type":"LinearAxis"},{"attributes":{},"id":"a09dd3cd-8416-44d0-b5f2-2313e6f61233","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"3485fbd4-363c-4020-9eeb-3735c3992000","type":"Title"},{"attributes":{"formatter":{"id":"e1f0b483-d445-4af8-879c-68abf5d9d452","type":"BasicTickFormatter"},"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"},"ticker":{"id":"9240ea6d-eff9-4025-8bb1-fb59e4cdc560","type":"BasicTicker"}},"id":"5dedc863-563b-42e1-b012-ae2ce4e2f7c0","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9d0a4c01-716f-4ec3-8fa2-f8202437a1ea","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f13b7a9-9099-476f-b827-7caf7d0b8a8a","type":"CircleCross"},{"attributes":{"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"}},"id":"db7c8cc1-2251-46ea-9555-99c738a144a9","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"},"ticker":{"id":"9240ea6d-eff9-4025-8bb1-fb59e4cdc560","type":"BasicTicker"}},"id":"77953325-1f58-446d-9258-6b8b4834ccb2","type":"Grid"},{"attributes":{},"id":"9240ea6d-eff9-4025-8bb1-fb59e4cdc560","type":"BasicTicker"},{"attributes":{},"id":"0e2c3d1a-728a-45c6-8135-2790f6a119d2","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8febbc34-b756-4b9c-9c31-b7959f8c5f44","type":"CircleCross"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"c8b4ba1e-1a62-4907-a960-fdbf5b7f9630","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"9d0a4c01-716f-4ec3-8fa2-f8202437a1ea","type":"BoxAnnotation"},"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"}},"id":"ca7bd78a-28fa-44ed-a069-3ecb6b39571a","type":"BoxZoomTool"},{"attributes":{},"id":"5bfc5b96-3d8e-44db-ac7e-df57c2a76265","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"}},"id":"e053239f-03ee-49de-9503-1517e3c14561","type":"HelpTool"},{"attributes":{"data_source":{"id":"c8b4ba1e-1a62-4907-a960-fdbf5b7f9630","type":"ColumnDataSource"},"glyph":{"id":"8febbc34-b756-4b9c-9c31-b7959f8c5f44","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":{"id":"9f13b7a9-9099-476f-b827-7caf7d0b8a8a","type":"CircleCross"},"selection_glyph":null},"id":"be75a8d7-b91d-48db-bca7-6f201b15fa0f","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7cd1aa37-14e4-4122-b89a-bc7562f95628","type":"DataRange1d"},{"attributes":{"plot":{"id":"8b133acd-81c8-4c72-8657-3f9a22b57544","subtype":"Figure","type":"Plot"}},"id":"f222fe8a-ccce-42d3-b790-d14ed2048266","type":"PanTool"}],"root_ids":["8b133acd-81c8-4c72-8657-3f9a22b57544"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"f08bdd8f-9ba5-4cdb-8f08-63223a227294","elementid":"fff71c5a-fa8d-456b-b41e-75dc9206b00c","modelid":"8b133acd-81c8-4c72-8657-3f9a22b57544"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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