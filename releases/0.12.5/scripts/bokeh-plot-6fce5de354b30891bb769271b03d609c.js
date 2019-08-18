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
      };var element = document.getElementById("08735a61-8d34-4ce7-999f-606b2c397208");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08735a61-8d34-4ce7-999f-606b2c397208' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"97128907-4046-4306-a807-80c06365caf0":{"roots":{"references":[{"attributes":{},"id":"f39eb38e-6f3e-4766-9d64-2bca87248c8d","type":"ToolEvents"},{"attributes":{"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"}},"id":"423bc7eb-6539-458d-a442-a97f3b630977","type":"SaveTool"},{"attributes":{},"id":"9f2f10c0-4d69-435e-92cb-bd0e3e381011","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["right","bottom","left","top"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"12b4b955-be15-4060-9417-7b3afdf41195","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2940d80c-f0fa-4102-aec2-9a0ebd9eff00","type":"BasicTicker"}},"id":"a1fbb48c-20eb-4492-a4d4-1fac3a0db844","type":"Grid"},{"attributes":{"overlay":{"id":"0b3d43ca-1370-4b6d-b76b-a87dac7bec14","type":"BoxAnnotation"},"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"}},"id":"7a99baaf-8108-4939-bbdc-947988195494","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"12b4b955-be15-4060-9417-7b3afdf41195","type":"ColumnDataSource"},"glyph":{"id":"0ddb3fd0-9c2a-4d51-97f8-7d44916f4225","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ac3b7264-d657-44f1-9d0f-63e103459e46","type":"Quad"},"selection_glyph":null},"id":"6e4d9fa1-3de0-455b-a260-f5c779b72b05","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5e6d81b6-9475-40a6-b2a7-f3e4d0aebae0","type":"BasicTickFormatter"},"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2940d80c-f0fa-4102-aec2-9a0ebd9eff00","type":"BasicTicker"}},"id":"4d6d5357-1590-444e-b067-d17ed1cc8f18","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ed8edc37-c7fd-470d-a5fa-68809360ebc2","type":"BasicTickFormatter"},"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f2f10c0-4d69-435e-92cb-bd0e3e381011","type":"BasicTicker"}},"id":"63dab1af-ba9b-4350-b020-4bfc643196e8","type":"LinearAxis"},{"attributes":{"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"}},"id":"7ef5e3b3-9cc5-4492-afc7-9e3596201e5a","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"3dcb1264-e029-4c20-93ac-5f3cc186ecb8","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"ac3b7264-d657-44f1-9d0f-63e103459e46","type":"Quad"},{"attributes":{},"id":"2940d80c-f0fa-4102-aec2-9a0ebd9eff00","type":"BasicTicker"},{"attributes":{"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"}},"id":"b5984b23-b2d1-4d15-8b13-c2b733bc1440","type":"PanTool"},{"attributes":{},"id":"5e6d81b6-9475-40a6-b2a7-f3e4d0aebae0","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0b3d43ca-1370-4b6d-b76b-a87dac7bec14","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"333ba438-246f-42d7-8102-e3c8d322359c","type":"Title"},{"attributes":{"below":[{"id":"4d6d5357-1590-444e-b067-d17ed1cc8f18","type":"LinearAxis"}],"left":[{"id":"63dab1af-ba9b-4350-b020-4bfc643196e8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4d6d5357-1590-444e-b067-d17ed1cc8f18","type":"LinearAxis"},{"id":"a1fbb48c-20eb-4492-a4d4-1fac3a0db844","type":"Grid"},{"id":"63dab1af-ba9b-4350-b020-4bfc643196e8","type":"LinearAxis"},{"id":"4013cf5a-20d0-4202-9f7c-32cd8e1a12fc","type":"Grid"},{"id":"0b3d43ca-1370-4b6d-b76b-a87dac7bec14","type":"BoxAnnotation"},{"id":"6e4d9fa1-3de0-455b-a260-f5c779b72b05","type":"GlyphRenderer"}],"title":{"id":"333ba438-246f-42d7-8102-e3c8d322359c","type":"Title"},"tool_events":{"id":"f39eb38e-6f3e-4766-9d64-2bca87248c8d","type":"ToolEvents"},"toolbar":{"id":"ce9cc960-63b5-45c0-90ff-60fd8d0be1d2","type":"Toolbar"},"x_range":{"id":"3dcb1264-e029-4c20-93ac-5f3cc186ecb8","type":"DataRange1d"},"y_range":{"id":"3ee7035c-faab-45bb-a171-747839ccfa39","type":"DataRange1d"}},"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"}},"id":"ce513039-2b87-4e75-888b-799d26982803","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5984b23-b2d1-4d15-8b13-c2b733bc1440","type":"PanTool"},{"id":"7ef5e3b3-9cc5-4492-afc7-9e3596201e5a","type":"WheelZoomTool"},{"id":"7a99baaf-8108-4939-bbdc-947988195494","type":"BoxZoomTool"},{"id":"423bc7eb-6539-458d-a442-a97f3b630977","type":"SaveTool"},{"id":"32048898-201d-4fd6-993a-69328d5d1149","type":"ResetTool"},{"id":"ce513039-2b87-4e75-888b-799d26982803","type":"HelpTool"}]},"id":"ce9cc960-63b5-45c0-90ff-60fd8d0be1d2","type":"Toolbar"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"0ddb3fd0-9c2a-4d51-97f8-7d44916f4225","type":"Quad"},{"attributes":{"callback":null},"id":"3ee7035c-faab-45bb-a171-747839ccfa39","type":"DataRange1d"},{"attributes":{"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"}},"id":"32048898-201d-4fd6-993a-69328d5d1149","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"c4f756d0-af40-4de2-a163-86f778211f5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f2f10c0-4d69-435e-92cb-bd0e3e381011","type":"BasicTicker"}},"id":"4013cf5a-20d0-4202-9f7c-32cd8e1a12fc","type":"Grid"},{"attributes":{},"id":"ed8edc37-c7fd-470d-a5fa-68809360ebc2","type":"BasicTickFormatter"}],"root_ids":["c4f756d0-af40-4de2-a163-86f778211f5e"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"97128907-4046-4306-a807-80c06365caf0","elementid":"08735a61-8d34-4ce7-999f-606b2c397208","modelid":"c4f756d0-af40-4de2-a163-86f778211f5e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
