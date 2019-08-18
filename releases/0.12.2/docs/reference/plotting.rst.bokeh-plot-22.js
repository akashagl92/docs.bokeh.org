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
      };var element = document.getElementById("e25028f8-bc94-484a-9759-197e3c62cf5a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e25028f8-bc94-484a-9759-197e3c62cf5a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"421e382b-fbe4-4e1a-bd1f-cec427cc6ba0":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4f4391a9-d2db-4974-b2fa-a4996d55a70d","type":"BoxAnnotation"},{"attributes":{},"id":"a8c79125-6eae-4bdf-9d52-e904dda03815","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"},"ticker":{"id":"15b45ab1-e6b6-4f3e-aa6e-fdd8a59b8b6d","type":"BasicTicker"}},"id":"bd1b3620-6e3d-46a5-94cd-8554f2de2420","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"23d03d50-5a38-4000-94c1-da127eab2790","type":"PanTool"},{"id":"1aa1b67e-af9b-4749-ad1a-8fcc16c9f802","type":"WheelZoomTool"},{"id":"73f6ca4d-958a-4455-94be-83a7b8256ba1","type":"BoxZoomTool"},{"id":"6c5e039e-b4f6-4414-b020-f64865998301","type":"SaveTool"},{"id":"094b4e6f-c8e9-40d1-9f52-81a38cabd325","type":"ResetTool"},{"id":"1c5ab097-a0e0-495e-8ba7-a0cc591f5091","type":"HelpTool"}]},"id":"f1a3989d-ab1a-48b0-af11-ba29a4d5ae01","type":"Toolbar"},{"attributes":{"formatter":{"id":"4b56e2e1-966a-44f8-85e6-e7f0a3a15f86","type":"BasicTickFormatter"},"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"},"ticker":{"id":"c916554f-1778-472d-9fe3-4fb06cfe7856","type":"BasicTicker"}},"id":"6f36d3b1-5c3c-4f3f-8ee1-8796f3e96656","type":"LinearAxis"},{"attributes":{"below":[{"id":"6f36d3b1-5c3c-4f3f-8ee1-8796f3e96656","type":"LinearAxis"}],"left":[{"id":"9cb00f49-84dc-46cd-9db8-04d598a31174","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6f36d3b1-5c3c-4f3f-8ee1-8796f3e96656","type":"LinearAxis"},{"id":"016c1ab6-7659-43bd-b6df-43149cfb8b4c","type":"Grid"},{"id":"9cb00f49-84dc-46cd-9db8-04d598a31174","type":"LinearAxis"},{"id":"bd1b3620-6e3d-46a5-94cd-8554f2de2420","type":"Grid"},{"id":"4f4391a9-d2db-4974-b2fa-a4996d55a70d","type":"BoxAnnotation"},{"id":"cd3a0693-d154-4592-9b6d-8d96cebb0268","type":"GlyphRenderer"}],"title":{"id":"786f1c2e-336d-4ca5-a63d-43cab400d49d","type":"Title"},"tool_events":{"id":"a8c79125-6eae-4bdf-9d52-e904dda03815","type":"ToolEvents"},"toolbar":{"id":"f1a3989d-ab1a-48b0-af11-ba29a4d5ae01","type":"Toolbar"},"x_range":{"id":"3063ccf8-4121-4d5a-adf1-1a13351357df","type":"DataRange1d"},"y_range":{"id":"c0f86834-d4c6-445a-bb5e-31fa562bc1aa","type":"DataRange1d"}},"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"3252d892-e7bd-4977-8e3a-1177f09c5ab2","type":"ColumnDataSource"},"glyph":{"id":"2b115d39-3996-4d46-8654-7445da4b9eeb","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":{"id":"564edd9f-a4dc-49e4-a781-594dea091e33","type":"SquareX"},"selection_glyph":null},"id":"cd3a0693-d154-4592-9b6d-8d96cebb0268","type":"GlyphRenderer"},{"attributes":{},"id":"4b56e2e1-966a-44f8-85e6-e7f0a3a15f86","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"4f4391a9-d2db-4974-b2fa-a4996d55a70d","type":"BoxAnnotation"},"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"}},"id":"73f6ca4d-958a-4455-94be-83a7b8256ba1","type":"BoxZoomTool"},{"attributes":{},"id":"0ee0f29f-035b-479a-8e2e-726b0c820f34","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0ee0f29f-035b-479a-8e2e-726b0c820f34","type":"BasicTickFormatter"},"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"},"ticker":{"id":"15b45ab1-e6b6-4f3e-aa6e-fdd8a59b8b6d","type":"BasicTicker"}},"id":"9cb00f49-84dc-46cd-9db8-04d598a31174","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"786f1c2e-336d-4ca5-a63d-43cab400d49d","type":"Title"},{"attributes":{"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"}},"id":"1aa1b67e-af9b-4749-ad1a-8fcc16c9f802","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"3252d892-e7bd-4977-8e3a-1177f09c5ab2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"}},"id":"094b4e6f-c8e9-40d1-9f52-81a38cabd325","type":"ResetTool"},{"attributes":{"callback":null},"id":"c0f86834-d4c6-445a-bb5e-31fa562bc1aa","type":"DataRange1d"},{"attributes":{},"id":"c916554f-1778-472d-9fe3-4fb06cfe7856","type":"BasicTicker"},{"attributes":{"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"},"ticker":{"id":"c916554f-1778-472d-9fe3-4fb06cfe7856","type":"BasicTicker"}},"id":"016c1ab6-7659-43bd-b6df-43149cfb8b4c","type":"Grid"},{"attributes":{"callback":null},"id":"3063ccf8-4121-4d5a-adf1-1a13351357df","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"564edd9f-a4dc-49e4-a781-594dea091e33","type":"SquareX"},{"attributes":{"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"}},"id":"6c5e039e-b4f6-4414-b020-f64865998301","type":"SaveTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b115d39-3996-4d46-8654-7445da4b9eeb","type":"SquareX"},{"attributes":{"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"}},"id":"1c5ab097-a0e0-495e-8ba7-a0cc591f5091","type":"HelpTool"},{"attributes":{},"id":"15b45ab1-e6b6-4f3e-aa6e-fdd8a59b8b6d","type":"BasicTicker"},{"attributes":{"plot":{"id":"baf39e99-4cc0-4e6c-ab9e-15f56011c146","subtype":"Figure","type":"Plot"}},"id":"23d03d50-5a38-4000-94c1-da127eab2790","type":"PanTool"}],"root_ids":["baf39e99-4cc0-4e6c-ab9e-15f56011c146"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"421e382b-fbe4-4e1a-bd1f-cec427cc6ba0","elementid":"e25028f8-bc94-484a-9759-197e3c62cf5a","modelid":"baf39e99-4cc0-4e6c-ab9e-15f56011c146"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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