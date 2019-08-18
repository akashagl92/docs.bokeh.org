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
      };var element = document.getElementById("a55ed665-e688-4b33-9fc3-97a703bd16e5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a55ed665-e688-4b33-9fc3-97a703bd16e5' but no matching script tag was found. ")
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
                var docs_json = {"f734155a-b9c4-4d1b-b9cf-852c1d09eeeb":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e48d6e30-ee97-481e-b023-60c0816e840d","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c182a646-4466-4862-ab51-1ff961609c3a","type":"PanTool"},{"id":"7b03680f-3ffc-4db6-95e9-fa214819cf83","type":"WheelZoomTool"},{"id":"febdc768-341b-4e8d-bbc1-69caf46b7fd9","type":"BoxZoomTool"},{"id":"366ccdd0-7aa2-410d-b831-9b0e313d10dc","type":"SaveTool"},{"id":"96c8f06b-a6eb-454b-9edd-b32015ff0045","type":"ResetTool"},{"id":"704b7e36-1acf-47bc-9399-071951b236d1","type":"HelpTool"}]},"id":"83554f04-b121-4f6e-8a49-6357f655d59f","type":"Toolbar"},{"attributes":{"callback":null},"id":"8f102aad-9752-4bc1-a69e-033a6518664e","type":"DataRange1d"},{"attributes":{},"id":"96c8f06b-a6eb-454b-9edd-b32015ff0045","type":"ResetTool"},{"attributes":{},"id":"d71f4bc4-7540-493b-8e4c-43dc9e6dadb7","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"70604aaf-03f3-4882-840c-71701964e022","type":"BoxAnnotation"}},"id":"febdc768-341b-4e8d-bbc1-69caf46b7fd9","type":"BoxZoomTool"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"e7b5d26a-9703-49cd-8228-8b6361e34c1f","type":"FactorRange"},{"attributes":{},"id":"81eef00f-1b63-456e-8997-8063f18894b9","type":"CategoricalTickFormatter"},{"attributes":{},"id":"c9e28582-e0ea-4002-b659-22e457d403ba","type":"LinearScale"},{"attributes":{},"id":"a34baadb-08c0-4652-8f55-88bee9853c67","type":"CategoricalScale"},{"attributes":{},"id":"c182a646-4466-4862-ab51-1ff961609c3a","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"5967e422-5c66-4613-adc0-ae33a8317d4b","type":"Title"},{"attributes":{"formatter":{"id":"81eef00f-1b63-456e-8997-8063f18894b9","type":"CategoricalTickFormatter"},"plot":{"id":"2a1bbe2d-515d-46d6-9c33-39be02b410ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4d3dff1-a335-4087-8162-65c9e54b6c56","type":"CategoricalTicker"}},"id":"89e9e5a7-ad7b-4379-b38c-5b4cb8bb5165","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"d71f4bc4-7540-493b-8e4c-43dc9e6dadb7","type":"BasicTickFormatter"},"plot":{"id":"2a1bbe2d-515d-46d6-9c33-39be02b410ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"01189273-61a4-411e-ab76-782a87bc2fd2","type":"BasicTicker"}},"id":"8a48eeed-1ef0-45cd-a7d7-39daa0d434d7","type":"LinearAxis"},{"attributes":{},"id":"01189273-61a4-411e-ab76-782a87bc2fd2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"0abf3901-a543-4f2e-8a1c-0071bbd6c009","type":"ColumnDataSource"},"glyph":{"id":"490e87c4-03c7-4128-b738-814e7d006057","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e48d6e30-ee97-481e-b023-60c0816e840d","type":"Circle"},"selection_glyph":null,"view":{"id":"98c6fd7f-9e56-48fa-b7f2-54f43769cb9b","type":"CDSView"}},"id":"77e95580-6240-4563-92ae-41c65ad3e1f2","type":"GlyphRenderer"},{"attributes":{},"id":"e4d3dff1-a335-4087-8162-65c9e54b6c56","type":"CategoricalTicker"},{"attributes":{"source":{"id":"0abf3901-a543-4f2e-8a1c-0071bbd6c009","type":"ColumnDataSource"}},"id":"98c6fd7f-9e56-48fa-b7f2-54f43769cb9b","type":"CDSView"},{"attributes":{"plot":{"id":"2a1bbe2d-515d-46d6-9c33-39be02b410ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"01189273-61a4-411e-ab76-782a87bc2fd2","type":"BasicTicker"}},"id":"5baa9a97-e558-4d12-b959-1552459b7b8e","type":"Grid"},{"attributes":{},"id":"7b03680f-3ffc-4db6-95e9-fa214819cf83","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"0abf3901-a543-4f2e-8a1c-0071bbd6c009","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"2a1bbe2d-515d-46d6-9c33-39be02b410ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4d3dff1-a335-4087-8162-65c9e54b6c56","type":"CategoricalTicker"}},"id":"4b54ab18-7a13-4784-bcb0-50ec835ebc7c","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"490e87c4-03c7-4128-b738-814e7d006057","type":"Circle"},{"attributes":{"below":[{"id":"8a48eeed-1ef0-45cd-a7d7-39daa0d434d7","type":"LinearAxis"}],"left":[{"id":"89e9e5a7-ad7b-4379-b38c-5b4cb8bb5165","type":"CategoricalAxis"}],"renderers":[{"id":"8a48eeed-1ef0-45cd-a7d7-39daa0d434d7","type":"LinearAxis"},{"id":"5baa9a97-e558-4d12-b959-1552459b7b8e","type":"Grid"},{"id":"89e9e5a7-ad7b-4379-b38c-5b4cb8bb5165","type":"CategoricalAxis"},{"id":"4b54ab18-7a13-4784-bcb0-50ec835ebc7c","type":"Grid"},{"id":"70604aaf-03f3-4882-840c-71701964e022","type":"BoxAnnotation"},{"id":"77e95580-6240-4563-92ae-41c65ad3e1f2","type":"GlyphRenderer"}],"title":{"id":"5967e422-5c66-4613-adc0-ae33a8317d4b","type":"Title"},"toolbar":{"id":"83554f04-b121-4f6e-8a49-6357f655d59f","type":"Toolbar"},"x_range":{"id":"8f102aad-9752-4bc1-a69e-033a6518664e","type":"DataRange1d"},"x_scale":{"id":"c9e28582-e0ea-4002-b659-22e457d403ba","type":"LinearScale"},"y_range":{"id":"e7b5d26a-9703-49cd-8228-8b6361e34c1f","type":"FactorRange"},"y_scale":{"id":"a34baadb-08c0-4652-8f55-88bee9853c67","type":"CategoricalScale"}},"id":"2a1bbe2d-515d-46d6-9c33-39be02b410ee","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"70604aaf-03f3-4882-840c-71701964e022","type":"BoxAnnotation"},{"attributes":{},"id":"366ccdd0-7aa2-410d-b831-9b0e313d10dc","type":"SaveTool"},{"attributes":{},"id":"704b7e36-1acf-47bc-9399-071951b236d1","type":"HelpTool"}],"root_ids":["2a1bbe2d-515d-46d6-9c33-39be02b410ee"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f734155a-b9c4-4d1b-b9cf-852c1d09eeeb","elementid":"a55ed665-e688-4b33-9fc3-97a703bd16e5","modelid":"2a1bbe2d-515d-46d6-9c33-39be02b410ee"}];
                
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
