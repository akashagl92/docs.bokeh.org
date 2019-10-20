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
      };var element = document.getElementById("2b08e3ba-65a8-4cc5-bb46-bc4fc5d756c5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b08e3ba-65a8-4cc5-bb46-bc4fc5d756c5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"0e4bca04-ddfa-4339-aa66-a4162a38d95d":{"roots":{"references":[{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25408","type":"LinearAxis"}],"left":[{"id":"25409","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25408","type":"LinearAxis"},{"id":"25409","type":"LinearAxis"},{"id":"25411","type":"Grid"},{"id":"25413","type":"Grid"},{"id":"25415","type":"GlyphRenderer"},{"id":"25418","type":"GlyphRenderer"}],"title":{"id":"25407","type":"Title"},"toolbar":{"id":"25466","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25386","type":"Range1d"},"x_scale":{"id":"25467","type":"LinearScale"},"y_range":{"id":"25387","type":"Range1d"},"y_scale":{"id":"25468","type":"LinearScale"}},"id":"25404","type":"Plot"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25446","type":"Line"},{"attributes":{"plot":null,"text":"II"},"id":"25407","type":"Title"},{"attributes":{"data_source":{"id":"25385","type":"ColumnDataSource"},"glyph":{"id":"25446","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25448","type":"CDSView"}},"id":"25447","type":"GlyphRenderer"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25471","type":"BasicTickFormatter"},"plot":{"id":"25404","type":"Plot"},"ticker":{"id":"25410","type":"BasicTicker"}},"id":"25408","type":"LinearAxis"},{"attributes":{"source":{"id":"25385","type":"ColumnDataSource"}},"id":"25448","type":"CDSView"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25469","type":"BasicTickFormatter"},"plot":{"id":"25404","type":"Plot"},"ticker":{"id":"25412","type":"BasicTicker"}},"id":"25409","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"25449","type":"Circle"},{"attributes":{},"id":"25410","type":"BasicTicker"},{"attributes":{"data_source":{"id":"25384","type":"ColumnDataSource"},"glyph":{"id":"25449","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25451","type":"CDSView"}},"id":"25450","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"25404","type":"Plot"},"ticker":{"id":"25410","type":"BasicTicker"}},"id":"25411","type":"Grid"},{"attributes":{"source":{"id":"25384","type":"ColumnDataSource"}},"id":"25451","type":"CDSView"},{"attributes":{},"id":"25412","type":"BasicTicker"},{"attributes":{"children":[{"id":"25478","type":"Row"},{"id":"25505","type":"Row"}],"sizing_mode":"scale_width"},"id":"25506","type":"Column"},{"attributes":{"children":[{"id":"25388","type":"Plot"},{"id":"25404","type":"Plot"}]},"id":"25478","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"25404","type":"Plot"},"ticker":{"id":"25412","type":"BasicTicker"}},"id":"25413","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25453","type":"Toolbar"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25414","type":"Line"},{"attributes":{},"id":"25454","type":"LinearScale"},{"attributes":{"data_source":{"id":"25385","type":"ColumnDataSource"},"glyph":{"id":"25414","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25416","type":"CDSView"}},"id":"25415","type":"GlyphRenderer"},{"attributes":{},"id":"25455","type":"LinearScale"},{"attributes":{"source":{"id":"25385","type":"ColumnDataSource"}},"id":"25416","type":"CDSView"},{"attributes":{},"id":"25456","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25456","type":"BasicTickFormatter"},"plot":{"id":"25388","type":"Plot"},"ticker":{"id":"25396","type":"BasicTicker"}},"id":"25393","type":"LinearAxis"},{"attributes":{},"id":"25458","type":"BasicTickFormatter"},{"attributes":{},"id":"25394","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"25417","type":"Circle"},{"attributes":{"data_source":{"id":"25384","type":"ColumnDataSource"},"glyph":{"id":"25417","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25419","type":"CDSView"}},"id":"25418","type":"GlyphRenderer"},{"attributes":{},"id":"25460","type":"Selection"},{"attributes":{"plot":{"id":"25388","type":"Plot"},"ticker":{"id":"25394","type":"BasicTicker"}},"id":"25395","type":"Grid"},{"attributes":{"source":{"id":"25384","type":"ColumnDataSource"}},"id":"25419","type":"CDSView"},{"attributes":{},"id":"25461","type":"UnionRenderers"},{"attributes":{},"id":"25396","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25424","type":"LinearAxis"}],"left":[{"id":"25425","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25424","type":"LinearAxis"},{"id":"25425","type":"LinearAxis"},{"id":"25427","type":"Grid"},{"id":"25429","type":"Grid"},{"id":"25431","type":"GlyphRenderer"},{"id":"25434","type":"GlyphRenderer"}],"title":{"id":"25423","type":"Title"},"toolbar":{"id":"25480","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25386","type":"Range1d"},"x_scale":{"id":"25481","type":"LinearScale"},"y_range":{"id":"25387","type":"Range1d"},"y_scale":{"id":"25482","type":"LinearScale"}},"id":"25420","type":"Plot"},{"attributes":{},"id":"25462","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"25388","type":"Plot"},"ticker":{"id":"25396","type":"BasicTicker"}},"id":"25397","type":"Grid"},{"attributes":{"plot":null,"text":"III"},"id":"25423","type":"Title"},{"attributes":{},"id":"25463","type":"UnionRenderers"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25485","type":"BasicTickFormatter"},"plot":{"id":"25420","type":"Plot"},"ticker":{"id":"25426","type":"BasicTicker"}},"id":"25424","type":"LinearAxis"},{"attributes":{},"id":"25467","type":"LinearScale"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25398","type":"Line"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25483","type":"BasicTickFormatter"},"plot":{"id":"25420","type":"Plot"},"ticker":{"id":"25428","type":"BasicTicker"}},"id":"25425","type":"LinearAxis"},{"attributes":{},"id":"25468","type":"LinearScale"},{"attributes":{"data_source":{"id":"25385","type":"ColumnDataSource"},"glyph":{"id":"25398","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25400","type":"CDSView"}},"id":"25399","type":"GlyphRenderer"},{"attributes":{},"id":"25426","type":"BasicTicker"},{"attributes":{},"id":"25469","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"25420","type":"Plot"},"ticker":{"id":"25426","type":"BasicTicker"}},"id":"25427","type":"Grid"},{"attributes":{"source":{"id":"25385","type":"ColumnDataSource"}},"id":"25400","type":"CDSView"},{"attributes":{},"id":"25471","type":"BasicTickFormatter"},{"attributes":{},"id":"25428","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"25401","type":"Circle"},{"attributes":{"data_source":{"id":"25384","type":"ColumnDataSource"},"glyph":{"id":"25401","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25403","type":"CDSView"}},"id":"25402","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"25420","type":"Plot"},"ticker":{"id":"25428","type":"BasicTicker"}},"id":"25429","type":"Grid"},{"attributes":{"children":[{"id":"25420","type":"Plot"},{"id":"25436","type":"Plot"}]},"id":"25505","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25480","type":"Toolbar"},{"attributes":{"source":{"id":"25384","type":"ColumnDataSource"}},"id":"25403","type":"CDSView"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25430","type":"Line"},{"attributes":{},"id":"25481","type":"LinearScale"},{"attributes":{"data_source":{"id":"25385","type":"ColumnDataSource"},"glyph":{"id":"25430","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25432","type":"CDSView"}},"id":"25431","type":"GlyphRenderer"},{"attributes":{},"id":"25482","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25466","type":"Toolbar"},{"attributes":{"source":{"id":"25385","type":"ColumnDataSource"}},"id":"25432","type":"CDSView"},{"attributes":{},"id":"25483","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"25433","type":"Circle"},{"attributes":{},"id":"25485","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25384","type":"ColumnDataSource"},"glyph":{"id":"25433","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25435","type":"CDSView"}},"id":"25434","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25493","type":"Toolbar"},{"attributes":{"source":{"id":"25384","type":"ColumnDataSource"}},"id":"25435","type":"CDSView"},{"attributes":{},"id":"25494","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25440","type":"LinearAxis"}],"left":[{"id":"25441","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25440","type":"LinearAxis"},{"id":"25441","type":"LinearAxis"},{"id":"25443","type":"Grid"},{"id":"25445","type":"Grid"},{"id":"25447","type":"GlyphRenderer"},{"id":"25450","type":"GlyphRenderer"}],"title":{"id":"25439","type":"Title"},"toolbar":{"id":"25493","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25386","type":"Range1d"},"x_scale":{"id":"25494","type":"LinearScale"},"y_range":{"id":"25387","type":"Range1d"},"y_scale":{"id":"25495","type":"LinearScale"}},"id":"25436","type":"Plot"},{"attributes":{},"id":"25495","type":"LinearScale"},{"attributes":{"plot":null,"text":"IV"},"id":"25439","type":"Title"},{"attributes":{"callback":null,"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}},"selected":{"id":"25462","type":"Selection"},"selection_policy":{"id":"25463","type":"UnionRenderers"}},"id":"25384","type":"ColumnDataSource"},{"attributes":{},"id":"25496","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25458","type":"BasicTickFormatter"},"plot":{"id":"25388","type":"Plot"},"ticker":{"id":"25394","type":"BasicTicker"}},"id":"25392","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25498","type":"BasicTickFormatter"},"plot":{"id":"25436","type":"Plot"},"ticker":{"id":"25442","type":"BasicTicker"}},"id":"25440","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}},"selected":{"id":"25460","type":"Selection"},"selection_policy":{"id":"25461","type":"UnionRenderers"}},"id":"25385","type":"ColumnDataSource"},{"attributes":{},"id":"25498","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"25386","type":"Range1d"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25496","type":"BasicTickFormatter"},"plot":{"id":"25436","type":"Plot"},"ticker":{"id":"25444","type":"BasicTicker"}},"id":"25441","type":"LinearAxis"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"25387","type":"Range1d"},{"attributes":{},"id":"25442","type":"BasicTicker"},{"attributes":{"sizing_mode":"scale_width","text":"\\n&lt;h1&gt;Anscombe&#x27;s Quartet&lt;/h1&gt;\\n&lt;p&gt;Anscombe&#x27;s quartet is a collection of four small datasets that have nearly\\nidentical simple descriptive statistics (mean, variance, correlation, and linear\\nregression lines), yet appear very different when graphed.\\n&lt;/p&gt;\\n"},"id":"25507","type":"Div"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25392","type":"LinearAxis"}],"left":[{"id":"25393","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25392","type":"LinearAxis"},{"id":"25393","type":"LinearAxis"},{"id":"25395","type":"Grid"},{"id":"25397","type":"Grid"},{"id":"25399","type":"GlyphRenderer"},{"id":"25402","type":"GlyphRenderer"}],"title":{"id":"25391","type":"Title"},"toolbar":{"id":"25453","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25386","type":"Range1d"},"x_scale":{"id":"25454","type":"LinearScale"},"y_range":{"id":"25387","type":"Range1d"},"y_scale":{"id":"25455","type":"LinearScale"}},"id":"25388","type":"Plot"},{"attributes":{"plot":{"id":"25436","type":"Plot"},"ticker":{"id":"25442","type":"BasicTicker"}},"id":"25443","type":"Grid"},{"attributes":{"children":[{"id":"25508","type":"WidgetBox"},{"id":"25506","type":"Column"}],"sizing_mode":"scale_width"},"id":"25509","type":"Column"},{"attributes":{"plot":null,"text":"I"},"id":"25391","type":"Title"},{"attributes":{},"id":"25444","type":"BasicTicker"},{"attributes":{"children":[{"id":"25507","type":"Div"}],"sizing_mode":"scale_width"},"id":"25508","type":"WidgetBox"},{"attributes":{"dimension":1,"plot":{"id":"25436","type":"Plot"},"ticker":{"id":"25444","type":"BasicTicker"}},"id":"25445","type":"Grid"}],"root_ids":["25509"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"0e4bca04-ddfa-4339-aa66-a4162a38d95d","roots":{"25509":"2b08e3ba-65a8-4cc5-bb46-bc4fc5d756c5"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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