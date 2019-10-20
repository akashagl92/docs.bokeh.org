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
      };var element = document.getElementById("7653ae3f-6407-4ec3-b278-8869ad54fbde");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7653ae3f-6407-4ec3-b278-8869ad54fbde' but no matching script tag was found. ")
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
                var docs_json = {"f58721e2-5a2b-44df-be54-288ae3040a55":{"roots":{"references":[{"attributes":{},"id":"a4074edd-7e0c-44e7-878e-83afe7f3473a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"35a56a14-804b-47b3-a687-8b7a992930e0","type":"DataRange1d"},{"attributes":{"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"}},"id":"80991810-3533-4d4c-8bf2-226b34b56593","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"007620c7-b8d9-4d7b-9087-47fb3ea9ce63","type":"Diamond"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"11143cc7-1c9e-4bd8-b6eb-df06dbab2cf2","type":"Diamond"},{"attributes":{"plot":null,"text":""},"id":"cb3c1664-0dfa-44a1-a43c-3cdf41c258b9","type":"Title"},{"attributes":{"formatter":{"id":"134fb253-7905-4010-856d-06c7ea637efc","type":"BasicTickFormatter"},"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c89d26e-dd92-4078-b7e6-402457fed0fa","type":"BasicTicker"}},"id":"6387df60-cdb2-4772-bf7f-a9cf8db27607","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4074edd-7e0c-44e7-878e-83afe7f3473a","type":"BasicTicker"}},"id":"efd00440-fcf8-4531-9627-37c8c1af05aa","type":"Grid"},{"attributes":{"overlay":{"id":"d6f0b6af-c7bb-427b-a5ff-e0fd8cdf0c0d","type":"BoxAnnotation"},"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"}},"id":"510a299b-9a12-4340-9c56-123055f515c9","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"6387df60-cdb2-4772-bf7f-a9cf8db27607","type":"LinearAxis"}],"left":[{"id":"da948a6d-f3d9-4dac-bc96-eacaa02cc1c2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6387df60-cdb2-4772-bf7f-a9cf8db27607","type":"LinearAxis"},{"id":"190cc7bf-ea1a-40be-8406-f366b32b5a94","type":"Grid"},{"id":"da948a6d-f3d9-4dac-bc96-eacaa02cc1c2","type":"LinearAxis"},{"id":"efd00440-fcf8-4531-9627-37c8c1af05aa","type":"Grid"},{"id":"d6f0b6af-c7bb-427b-a5ff-e0fd8cdf0c0d","type":"BoxAnnotation"},{"id":"681e44e4-e688-4cce-8952-c91abc8bae24","type":"GlyphRenderer"}],"title":{"id":"cb3c1664-0dfa-44a1-a43c-3cdf41c258b9","type":"Title"},"tool_events":{"id":"2c4eb883-e60e-439e-8809-47d832d8d264","type":"ToolEvents"},"toolbar":{"id":"23274fe3-9336-4213-8053-7ad54ddc3a46","type":"Toolbar"},"x_range":{"id":"74e4b72b-0d22-4723-8a13-cf7b264ae0f7","type":"DataRange1d"},"y_range":{"id":"35a56a14-804b-47b3-a687-8b7a992930e0","type":"DataRange1d"}},"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"}},"id":"5014f82e-6305-47c2-9ce1-f606d29cbbb5","type":"HelpTool"},{"attributes":{},"id":"134fb253-7905-4010-856d-06c7ea637efc","type":"BasicTickFormatter"},{"attributes":{},"id":"2c4eb883-e60e-439e-8809-47d832d8d264","type":"ToolEvents"},{"attributes":{"data_source":{"id":"9409ac41-ff57-49a6-8126-76a1fbfac164","type":"ColumnDataSource"},"glyph":{"id":"11143cc7-1c9e-4bd8-b6eb-df06dbab2cf2","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":{"id":"007620c7-b8d9-4d7b-9087-47fb3ea9ce63","type":"Diamond"},"selection_glyph":null},"id":"681e44e4-e688-4cce-8952-c91abc8bae24","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"00143e13-793f-4d86-aa26-a48ee734dec9","type":"BasicTickFormatter"},"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4074edd-7e0c-44e7-878e-83afe7f3473a","type":"BasicTicker"}},"id":"da948a6d-f3d9-4dac-bc96-eacaa02cc1c2","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"443fabb7-a748-4e23-82bf-ed0a7688844d","type":"PanTool"},{"id":"80991810-3533-4d4c-8bf2-226b34b56593","type":"WheelZoomTool"},{"id":"510a299b-9a12-4340-9c56-123055f515c9","type":"BoxZoomTool"},{"id":"24b079f7-d05b-4605-9489-427bc434ba33","type":"SaveTool"},{"id":"ab9604b0-382f-4914-9169-5d76d1693f76","type":"ResetTool"},{"id":"5014f82e-6305-47c2-9ce1-f606d29cbbb5","type":"HelpTool"}]},"id":"23274fe3-9336-4213-8053-7ad54ddc3a46","type":"Toolbar"},{"attributes":{"callback":null},"id":"74e4b72b-0d22-4723-8a13-cf7b264ae0f7","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"9409ac41-ff57-49a6-8126-76a1fbfac164","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c89d26e-dd92-4078-b7e6-402457fed0fa","type":"BasicTicker"}},"id":"190cc7bf-ea1a-40be-8406-f366b32b5a94","type":"Grid"},{"attributes":{"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"}},"id":"ab9604b0-382f-4914-9169-5d76d1693f76","type":"ResetTool"},{"attributes":{},"id":"00143e13-793f-4d86-aa26-a48ee734dec9","type":"BasicTickFormatter"},{"attributes":{},"id":"5c89d26e-dd92-4078-b7e6-402457fed0fa","type":"BasicTicker"},{"attributes":{"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"}},"id":"443fabb7-a748-4e23-82bf-ed0a7688844d","type":"PanTool"},{"attributes":{"plot":{"id":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09","subtype":"Figure","type":"Plot"}},"id":"24b079f7-d05b-4605-9489-427bc434ba33","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d6f0b6af-c7bb-427b-a5ff-e0fd8cdf0c0d","type":"BoxAnnotation"}],"root_ids":["bdc3cc88-2d05-4ded-86b8-ba1f231d8e09"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"f58721e2-5a2b-44df-be54-288ae3040a55","elementid":"7653ae3f-6407-4ec3-b278-8869ad54fbde","modelid":"bdc3cc88-2d05-4ded-86b8-ba1f231d8e09"}];
                
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
