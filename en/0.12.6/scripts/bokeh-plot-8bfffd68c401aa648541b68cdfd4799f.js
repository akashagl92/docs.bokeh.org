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
      };var element = document.getElementById("dcd24b6f-33a4-4d37-96fc-5f0313e80665");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dcd24b6f-33a4-4d37-96fc-5f0313e80665' but no matching script tag was found. ")
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
                var docs_json = {"9cc8d297-7464-4beb-aea9-f3e425a99fc6":{"roots":{"references":[{"attributes":{"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb0becda-cde4-4e8b-a432-b081381fe9cd","type":"BasicTicker"}},"id":"a0291ef2-d25b-4b91-aa70-6c43dc1c6d36","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]}},"id":"35325c5b-5db4-4e7d-894f-d5e7b0dd83eb","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd6f629d-b72f-4844-a2cd-5d1656fb80ad","type":"BasicTicker"}},"id":"b28bfaac-43c6-42d0-801b-57d46b2ccfb1","type":"Grid"},{"attributes":{"formatter":{"id":"8636f685-50da-4ef0-8a4b-4be0fbc8d3c5","type":"BasicTickFormatter"},"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb0becda-cde4-4e8b-a432-b081381fe9cd","type":"BasicTicker"}},"id":"3135b50a-6f30-4e18-87f3-91e27c415271","type":"LinearAxis"},{"attributes":{"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"}},"id":"e894e4ee-d583-4048-a00a-84401c6fd735","type":"ResetTool"},{"attributes":{"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"}},"id":"489c21d8-c338-46b7-80ba-225dfa338f2c","type":"SaveTool"},{"attributes":{},"id":"fd6f629d-b72f-4844-a2cd-5d1656fb80ad","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2f2c62ab-5cfa-4870-a7b7-21467eeeb8ca","type":"DataRange1d"},{"attributes":{},"id":"23ad321b-0964-4936-971f-15154e4ca29b","type":"ToolEvents"},{"attributes":{"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"}},"id":"131a910c-c918-4749-8bd1-43ddcdcb84c4","type":"PanTool"},{"attributes":{"below":[{"id":"3135b50a-6f30-4e18-87f3-91e27c415271","type":"LinearAxis"}],"left":[{"id":"e6b37e09-7800-45ba-b968-6aa49018bda0","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"3135b50a-6f30-4e18-87f3-91e27c415271","type":"LinearAxis"},{"id":"a0291ef2-d25b-4b91-aa70-6c43dc1c6d36","type":"Grid"},{"id":"e6b37e09-7800-45ba-b968-6aa49018bda0","type":"LinearAxis"},{"id":"b28bfaac-43c6-42d0-801b-57d46b2ccfb1","type":"Grid"},{"id":"e506c811-5529-4dcc-b2f9-517d8647cc74","type":"BoxAnnotation"},{"id":"c8e7621d-bc04-45f9-8861-06595ef212f6","type":"GlyphRenderer"}],"title":{"id":"71fd8552-4cf9-4f20-bce9-8dc3f25b4c5b","type":"Title"},"tool_events":{"id":"23ad321b-0964-4936-971f-15154e4ca29b","type":"ToolEvents"},"toolbar":{"id":"03ca63b8-c19d-489b-b351-610484975e48","type":"Toolbar"},"x_range":{"id":"2f2c62ab-5cfa-4870-a7b7-21467eeeb8ca","type":"DataRange1d"},"x_scale":{"id":"bfb3b9e6-d3d6-4a38-8ee2-044b6573df53","type":"LinearScale"},"y_range":{"id":"73c3ec71-a14a-4de3-b197-91d67b45a063","type":"DataRange1d"},"y_scale":{"id":"7c3bcc71-ab56-4e8f-84e5-7d13ef0be202","type":"LinearScale"}},"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"71fd8552-4cf9-4f20-bce9-8dc3f25b4c5b","type":"Title"},{"attributes":{"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"}},"id":"ef5d2271-8b6f-41cb-8a4b-85a172133833","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e506c811-5529-4dcc-b2f9-517d8647cc74","type":"BoxAnnotation"},{"attributes":{},"id":"bfb3b9e6-d3d6-4a38-8ee2-044b6573df53","type":"LinearScale"},{"attributes":{},"id":"7c3bcc71-ab56-4e8f-84e5-7d13ef0be202","type":"LinearScale"},{"attributes":{},"id":"8636f685-50da-4ef0-8a4b-4be0fbc8d3c5","type":"BasicTickFormatter"},{"attributes":{},"id":"cb0becda-cde4-4e8b-a432-b081381fe9cd","type":"BasicTicker"},{"attributes":{"formatter":{"id":"61dc7b01-d55e-47ae-9e6e-0e20a63a6451","type":"FuncTickFormatter"},"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd6f629d-b72f-4844-a2cd-5d1656fb80ad","type":"BasicTicker"}},"id":"e6b37e09-7800-45ba-b968-6aa49018bda0","type":"LinearAxis"},{"attributes":{"code":"\n    return Math.floor(tick) + \" + \" + (tick % 1).toFixed(2)\n"},"id":"61dc7b01-d55e-47ae-9e6e-0e20a63a6451","type":"FuncTickFormatter"},{"attributes":{"data_source":{"id":"35325c5b-5db4-4e7d-894f-d5e7b0dd83eb","type":"ColumnDataSource"},"glyph":{"id":"004b6cd5-7daa-4e70-a377-ae246a8ba70f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"92ecaa0a-b8f4-4889-a7fb-60a023f1f940","type":"Circle"},"selection_glyph":null},"id":"c8e7621d-bc04-45f9-8861-06595ef212f6","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"e506c811-5529-4dcc-b2f9-517d8647cc74","type":"BoxAnnotation"},"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"}},"id":"ccd5ff9d-816c-4264-a033-e22596ef635e","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"004b6cd5-7daa-4e70-a377-ae246a8ba70f","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"131a910c-c918-4749-8bd1-43ddcdcb84c4","type":"PanTool"},{"id":"237434cb-b695-4d14-9ad5-5f32a67ff529","type":"WheelZoomTool"},{"id":"ccd5ff9d-816c-4264-a033-e22596ef635e","type":"BoxZoomTool"},{"id":"489c21d8-c338-46b7-80ba-225dfa338f2c","type":"SaveTool"},{"id":"e894e4ee-d583-4048-a00a-84401c6fd735","type":"ResetTool"},{"id":"ef5d2271-8b6f-41cb-8a4b-85a172133833","type":"HelpTool"}]},"id":"03ca63b8-c19d-489b-b351-610484975e48","type":"Toolbar"},{"attributes":{"plot":{"id":"5208750a-6474-4208-9a48-ca97911e8551","subtype":"Figure","type":"Plot"}},"id":"237434cb-b695-4d14-9ad5-5f32a67ff529","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"73c3ec71-a14a-4de3-b197-91d67b45a063","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"92ecaa0a-b8f4-4889-a7fb-60a023f1f940","type":"Circle"}],"root_ids":["5208750a-6474-4208-9a48-ca97911e8551"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"9cc8d297-7464-4beb-aea9-f3e425a99fc6","elementid":"dcd24b6f-33a4-4d37-96fc-5f0313e80665","modelid":"5208750a-6474-4208-9a48-ca97911e8551"}];
                
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
