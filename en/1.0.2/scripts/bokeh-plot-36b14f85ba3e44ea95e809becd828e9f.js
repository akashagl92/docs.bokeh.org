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
      };var element = document.getElementById("efdf0877-a18c-42bc-907a-7c0e59f28dfd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'efdf0877-a18c-42bc-907a-7c0e59f28dfd' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"c28bc1e4-52e4-481b-a39e-3dcc4d4af2ae":{"roots":{"references":[{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25443","type":"Line"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25405","type":"LinearAxis"}],"left":[{"id":"25406","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25405","type":"LinearAxis"},{"id":"25406","type":"LinearAxis"},{"id":"25408","type":"Grid"},{"id":"25410","type":"Grid"},{"id":"25412","type":"GlyphRenderer"},{"id":"25415","type":"GlyphRenderer"}],"title":{"id":"25404","type":"Title"},"toolbar":{"id":"25462","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25383","type":"Range1d"},"x_scale":{"id":"25463","type":"LinearScale"},"y_range":{"id":"25384","type":"Range1d"},"y_scale":{"id":"25464","type":"LinearScale"}},"id":"25401","type":"Plot"},{"attributes":{"data_source":{"id":"25382","type":"ColumnDataSource"},"glyph":{"id":"25443","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25445","type":"CDSView"}},"id":"25444","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"II"},"id":"25404","type":"Title"},{"attributes":{"source":{"id":"25382","type":"ColumnDataSource"}},"id":"25445","type":"CDSView"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25467","type":"BasicTickFormatter"},"plot":{"id":"25401","type":"Plot"},"ticker":{"id":"25407","type":"BasicTicker"}},"id":"25405","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25469","type":"BasicTickFormatter"},"plot":{"id":"25401","type":"Plot"},"ticker":{"id":"25409","type":"BasicTicker"}},"id":"25406","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"25446","type":"Circle"},{"attributes":{"data_source":{"id":"25381","type":"ColumnDataSource"},"glyph":{"id":"25446","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25448","type":"CDSView"}},"id":"25447","type":"GlyphRenderer"},{"attributes":{},"id":"25407","type":"BasicTicker"},{"attributes":{"source":{"id":"25381","type":"ColumnDataSource"}},"id":"25448","type":"CDSView"},{"attributes":{"plot":{"id":"25401","type":"Plot"},"ticker":{"id":"25407","type":"BasicTicker"}},"id":"25408","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"25433","type":"Plot"},"ticker":{"id":"25441","type":"BasicTicker"}},"id":"25442","type":"Grid"},{"attributes":{"children":[{"id":"25475","type":"Row"},{"id":"25502","type":"Row"}],"sizing_mode":"scale_width"},"id":"25503","type":"Column"},{"attributes":{},"id":"25409","type":"BasicTicker"},{"attributes":{"children":[{"id":"25385","type":"Plot"},{"id":"25401","type":"Plot"}]},"id":"25475","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25449","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"25401","type":"Plot"},"ticker":{"id":"25409","type":"BasicTicker"}},"id":"25410","type":"Grid"},{"attributes":{},"id":"25450","type":"LinearScale"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25411","type":"Line"},{"attributes":{},"id":"25451","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25456","type":"BasicTickFormatter"},"plot":{"id":"25385","type":"Plot"},"ticker":{"id":"25393","type":"BasicTicker"}},"id":"25390","type":"LinearAxis"},{"attributes":{"data_source":{"id":"25382","type":"ColumnDataSource"},"glyph":{"id":"25411","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25413","type":"CDSView"}},"id":"25412","type":"GlyphRenderer"},{"attributes":{},"id":"25454","type":"BasicTickFormatter"},{"attributes":{},"id":"25391","type":"BasicTicker"},{"attributes":{"source":{"id":"25382","type":"ColumnDataSource"}},"id":"25413","type":"CDSView"},{"attributes":{},"id":"25456","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"25385","type":"Plot"},"ticker":{"id":"25391","type":"BasicTicker"}},"id":"25392","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"25414","type":"Circle"},{"attributes":{},"id":"25457","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"25381","type":"ColumnDataSource"},"glyph":{"id":"25414","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25416","type":"CDSView"}},"id":"25415","type":"GlyphRenderer"},{"attributes":{},"id":"25393","type":"BasicTicker"},{"attributes":{},"id":"25458","type":"Selection"},{"attributes":{"source":{"id":"25381","type":"ColumnDataSource"}},"id":"25416","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"25385","type":"Plot"},"ticker":{"id":"25393","type":"BasicTicker"}},"id":"25394","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25421","type":"LinearAxis"}],"left":[{"id":"25422","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25421","type":"LinearAxis"},{"id":"25422","type":"LinearAxis"},{"id":"25424","type":"Grid"},{"id":"25426","type":"Grid"},{"id":"25428","type":"GlyphRenderer"},{"id":"25431","type":"GlyphRenderer"}],"title":{"id":"25420","type":"Title"},"toolbar":{"id":"25476","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25383","type":"Range1d"},"x_scale":{"id":"25477","type":"LinearScale"},"y_range":{"id":"25384","type":"Range1d"},"y_scale":{"id":"25478","type":"LinearScale"}},"id":"25417","type":"Plot"},{"attributes":{},"id":"25460","type":"Selection"},{"attributes":{"plot":null,"text":"III"},"id":"25420","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25462","type":"Toolbar"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25395","type":"Line"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25481","type":"BasicTickFormatter"},"plot":{"id":"25417","type":"Plot"},"ticker":{"id":"25423","type":"BasicTicker"}},"id":"25421","type":"LinearAxis"},{"attributes":{},"id":"25463","type":"LinearScale"},{"attributes":{"data_source":{"id":"25382","type":"ColumnDataSource"},"glyph":{"id":"25395","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25397","type":"CDSView"}},"id":"25396","type":"GlyphRenderer"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25483","type":"BasicTickFormatter"},"plot":{"id":"25417","type":"Plot"},"ticker":{"id":"25425","type":"BasicTicker"}},"id":"25422","type":"LinearAxis"},{"attributes":{},"id":"25464","type":"LinearScale"},{"attributes":{"source":{"id":"25382","type":"ColumnDataSource"}},"id":"25397","type":"CDSView"},{"attributes":{},"id":"25423","type":"BasicTicker"},{"attributes":{},"id":"25467","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"25417","type":"Plot"},"ticker":{"id":"25423","type":"BasicTicker"}},"id":"25424","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"25398","type":"Circle"},{"attributes":{},"id":"25469","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25381","type":"ColumnDataSource"},"glyph":{"id":"25398","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25400","type":"CDSView"}},"id":"25399","type":"GlyphRenderer"},{"attributes":{},"id":"25425","type":"BasicTicker"},{"attributes":{"source":{"id":"25381","type":"ColumnDataSource"}},"id":"25400","type":"CDSView"},{"attributes":{},"id":"25459","type":"UnionRenderers"},{"attributes":{"children":[{"id":"25417","type":"Plot"},{"id":"25433","type":"Plot"}]},"id":"25502","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"25417","type":"Plot"},"ticker":{"id":"25425","type":"BasicTicker"}},"id":"25426","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25476","type":"Toolbar"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25427","type":"Line"},{"attributes":{},"id":"25477","type":"LinearScale"},{"attributes":{"data_source":{"id":"25382","type":"ColumnDataSource"},"glyph":{"id":"25427","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25429","type":"CDSView"}},"id":"25428","type":"GlyphRenderer"},{"attributes":{},"id":"25478","type":"LinearScale"},{"attributes":{"source":{"id":"25382","type":"ColumnDataSource"}},"id":"25429","type":"CDSView"},{"attributes":{},"id":"25481","type":"BasicTickFormatter"},{"attributes":{},"id":"25483","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"25430","type":"Circle"},{"attributes":{"data_source":{"id":"25381","type":"ColumnDataSource"},"glyph":{"id":"25430","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25432","type":"CDSView"}},"id":"25431","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25489","type":"Toolbar"},{"attributes":{"source":{"id":"25381","type":"ColumnDataSource"}},"id":"25432","type":"CDSView"},{"attributes":{},"id":"25490","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25437","type":"LinearAxis"}],"left":[{"id":"25438","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25437","type":"LinearAxis"},{"id":"25438","type":"LinearAxis"},{"id":"25440","type":"Grid"},{"id":"25442","type":"Grid"},{"id":"25444","type":"GlyphRenderer"},{"id":"25447","type":"GlyphRenderer"}],"title":{"id":"25436","type":"Title"},"toolbar":{"id":"25489","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25383","type":"Range1d"},"x_scale":{"id":"25490","type":"LinearScale"},"y_range":{"id":"25384","type":"Range1d"},"y_scale":{"id":"25491","type":"LinearScale"}},"id":"25433","type":"Plot"},{"attributes":{},"id":"25491","type":"LinearScale"},{"attributes":{"plot":null,"text":"IV"},"id":"25436","type":"Title"},{"attributes":{"callback":null,"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}},"selected":{"id":"25460","type":"Selection"},"selection_policy":{"id":"25459","type":"UnionRenderers"}},"id":"25381","type":"ColumnDataSource"},{"attributes":{},"id":"25494","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25494","type":"BasicTickFormatter"},"plot":{"id":"25433","type":"Plot"},"ticker":{"id":"25439","type":"BasicTicker"}},"id":"25437","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}},"selected":{"id":"25458","type":"Selection"},"selection_policy":{"id":"25457","type":"UnionRenderers"}},"id":"25382","type":"ColumnDataSource"},{"attributes":{},"id":"25496","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"25383","type":"Range1d"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25496","type":"BasicTickFormatter"},"plot":{"id":"25433","type":"Plot"},"ticker":{"id":"25441","type":"BasicTicker"}},"id":"25438","type":"LinearAxis"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"25384","type":"Range1d"},{"attributes":{},"id":"25439","type":"BasicTicker"},{"attributes":{"sizing_mode":"scale_width","text":"\\n&lt;h1&gt;Anscombe&#x27;s Quartet&lt;/h1&gt;\\n&lt;p&gt;Anscombe&#x27;s quartet is a collection of four small datasets that have nearly\\nidentical simple descriptive statistics (mean, variance, correlation, and linear\\nregression lines), yet appear very different when graphed.\\n&lt;/p&gt;\\n"},"id":"25504","type":"Div"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25389","type":"LinearAxis"}],"left":[{"id":"25390","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25389","type":"LinearAxis"},{"id":"25390","type":"LinearAxis"},{"id":"25392","type":"Grid"},{"id":"25394","type":"Grid"},{"id":"25396","type":"GlyphRenderer"},{"id":"25399","type":"GlyphRenderer"}],"title":{"id":"25388","type":"Title"},"toolbar":{"id":"25449","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25383","type":"Range1d"},"x_scale":{"id":"25450","type":"LinearScale"},"y_range":{"id":"25384","type":"Range1d"},"y_scale":{"id":"25451","type":"LinearScale"}},"id":"25385","type":"Plot"},{"attributes":{"plot":{"id":"25433","type":"Plot"},"ticker":{"id":"25439","type":"BasicTicker"}},"id":"25440","type":"Grid"},{"attributes":{"children":[{"id":"25505","type":"WidgetBox"},{"id":"25503","type":"Column"}],"sizing_mode":"scale_width"},"id":"25506","type":"Column"},{"attributes":{"plot":null,"text":"I"},"id":"25388","type":"Title"},{"attributes":{},"id":"25441","type":"BasicTicker"},{"attributes":{"children":[{"id":"25504","type":"Div"}],"sizing_mode":"scale_width"},"id":"25505","type":"WidgetBox"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25454","type":"BasicTickFormatter"},"plot":{"id":"25385","type":"Plot"},"ticker":{"id":"25391","type":"BasicTicker"}},"id":"25389","type":"LinearAxis"}],"root_ids":["25506"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c28bc1e4-52e4-481b-a39e-3dcc4d4af2ae","roots":{"25506":"efdf0877-a18c-42bc-907a-7c0e59f28dfd"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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