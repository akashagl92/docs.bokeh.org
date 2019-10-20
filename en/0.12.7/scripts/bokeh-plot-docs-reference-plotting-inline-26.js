(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("2a30f271-ac09-4ef1-a95d-0e15cfa8fb0e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2a30f271-ac09-4ef1-a95d-0e15cfa8fb0e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"4bfd7bce-b473-4660-9957-2e54ba074edf":{"roots":{"references":[{"attributes":{"plot":{"id":"982070e8-022c-4f03-a8d6-e9b745c7d446","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a0716c7-e24a-4133-afdd-d01e08131927","type":"BasicTicker"}},"id":"9378cc32-fd27-44b9-ae25-83e72a33bfc0","type":"Grid"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b59f045a-4cad-4b61-ab28-426c1a6ab46e","type":"X"},{"attributes":{"callback":null},"id":"bdc87cf5-b263-44b7-9fe9-58a72070905f","type":"DataRange1d"},{"attributes":{},"id":"47d83c6e-62c0-41c2-8b48-3e9ad26f4387","type":"LinearScale"},{"attributes":{"data_source":{"id":"b4e51bf6-e33e-4d9c-a955-a7a6db0bd537","type":"ColumnDataSource"},"glyph":{"id":"b59f045a-4cad-4b61-ab28-426c1a6ab46e","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7e188b26-f252-4ada-aca2-9478981e22fa","type":"X"},"selection_glyph":null,"view":{"id":"e27f3100-ff2a-4108-9ab1-9260392836c2","type":"CDSView"}},"id":"0a186913-1dca-4608-8bdc-3044bbbca659","type":"GlyphRenderer"},{"attributes":{},"id":"66b0663d-ee39-431b-b65e-a2987201e455","type":"LinearScale"},{"attributes":{},"id":"5bd47905-992e-4b8a-bff3-5774e678578d","type":"HelpTool"},{"attributes":{},"id":"2a0716c7-e24a-4133-afdd-d01e08131927","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6b92de2a-2f04-414e-aeb0-69f0caacab11","type":"BasicTickFormatter"},"plot":{"id":"982070e8-022c-4f03-a8d6-e9b745c7d446","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf03d0ae-0454-4af8-b392-da11af1796db","type":"BasicTicker"}},"id":"fc901f31-9c70-4a57-8b11-e45c79059c18","type":"LinearAxis"},{"attributes":{"overlay":{"id":"77bbe801-e76c-45b9-9062-4f595c8cc44d","type":"BoxAnnotation"}},"id":"256527cb-e3f0-4e68-9e45-7072ad569726","type":"BoxZoomTool"},{"attributes":{},"id":"4b33d5f6-25ce-4364-b2c9-b5555b04e1a4","type":"SaveTool"},{"attributes":{},"id":"cf03d0ae-0454-4af8-b392-da11af1796db","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"982070e8-022c-4f03-a8d6-e9b745c7d446","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf03d0ae-0454-4af8-b392-da11af1796db","type":"BasicTicker"}},"id":"663dbf48-c96d-4077-971f-ed95d7a700f6","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e188b26-f252-4ada-aca2-9478981e22fa","type":"X"},{"attributes":{},"id":"71e2ac56-bfea-4e2b-a9b8-ffe54b8c3166","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"b4e51bf6-e33e-4d9c-a955-a7a6db0bd537","type":"ColumnDataSource"},{"attributes":{},"id":"6b92de2a-2f04-414e-aeb0-69f0caacab11","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"77bbe801-e76c-45b9-9062-4f595c8cc44d","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"d9f8171e-3e4b-4b3c-b6e3-dab3900edbbc","type":"LinearAxis"}],"left":[{"id":"fc901f31-9c70-4a57-8b11-e45c79059c18","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d9f8171e-3e4b-4b3c-b6e3-dab3900edbbc","type":"LinearAxis"},{"id":"9378cc32-fd27-44b9-ae25-83e72a33bfc0","type":"Grid"},{"id":"fc901f31-9c70-4a57-8b11-e45c79059c18","type":"LinearAxis"},{"id":"663dbf48-c96d-4077-971f-ed95d7a700f6","type":"Grid"},{"id":"77bbe801-e76c-45b9-9062-4f595c8cc44d","type":"BoxAnnotation"},{"id":"0a186913-1dca-4608-8bdc-3044bbbca659","type":"GlyphRenderer"}],"title":{"id":"0ab6636a-c500-4b95-a6b4-9da33171a752","type":"Title"},"toolbar":{"id":"cad0b9c6-b544-4b4c-8f44-1e73d3007694","type":"Toolbar"},"x_range":{"id":"ca20fcab-6cf1-4d4a-866e-100c3ab58c8b","type":"DataRange1d"},"x_scale":{"id":"47d83c6e-62c0-41c2-8b48-3e9ad26f4387","type":"LinearScale"},"y_range":{"id":"bdc87cf5-b263-44b7-9fe9-58a72070905f","type":"DataRange1d"},"y_scale":{"id":"66b0663d-ee39-431b-b65e-a2987201e455","type":"LinearScale"}},"id":"982070e8-022c-4f03-a8d6-e9b745c7d446","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"b4e51bf6-e33e-4d9c-a955-a7a6db0bd537","type":"ColumnDataSource"}},"id":"e27f3100-ff2a-4108-9ab1-9260392836c2","type":"CDSView"},{"attributes":{},"id":"6a986862-cfb0-4f53-a8e9-7c9b3754d7ea","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6a986862-cfb0-4f53-a8e9-7c9b3754d7ea","type":"PanTool"},{"id":"cc4ca76a-de2a-424f-b3ea-ccbf1af76f17","type":"WheelZoomTool"},{"id":"256527cb-e3f0-4e68-9e45-7072ad569726","type":"BoxZoomTool"},{"id":"4b33d5f6-25ce-4364-b2c9-b5555b04e1a4","type":"SaveTool"},{"id":"58015a28-122a-47d7-ada5-66e2a2978edc","type":"ResetTool"},{"id":"5bd47905-992e-4b8a-bff3-5774e678578d","type":"HelpTool"}]},"id":"cad0b9c6-b544-4b4c-8f44-1e73d3007694","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"0ab6636a-c500-4b95-a6b4-9da33171a752","type":"Title"},{"attributes":{},"id":"58015a28-122a-47d7-ada5-66e2a2978edc","type":"ResetTool"},{"attributes":{"formatter":{"id":"71e2ac56-bfea-4e2b-a9b8-ffe54b8c3166","type":"BasicTickFormatter"},"plot":{"id":"982070e8-022c-4f03-a8d6-e9b745c7d446","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a0716c7-e24a-4133-afdd-d01e08131927","type":"BasicTicker"}},"id":"d9f8171e-3e4b-4b3c-b6e3-dab3900edbbc","type":"LinearAxis"},{"attributes":{},"id":"cc4ca76a-de2a-424f-b3ea-ccbf1af76f17","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"ca20fcab-6cf1-4d4a-866e-100c3ab58c8b","type":"DataRange1d"}],"root_ids":["982070e8-022c-4f03-a8d6-e9b745c7d446"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"4bfd7bce-b473-4660-9957-2e54ba074edf","elementid":"2a30f271-ac09-4ef1-a95d-0e15cfa8fb0e","modelid":"982070e8-022c-4f03-a8d6-e9b745c7d446"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
