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
      };var element = document.getElementById("b9df2a05-84c9-4a2b-b899-dc5f5469de1a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9df2a05-84c9-4a2b-b899-dc5f5469de1a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"f300daa1-2d63-4eec-ae98-bcdab6868a25":{"roots":{"references":[{"attributes":{"source":{"id":"b7347719-9166-44c0-918c-a8d7ade12291","type":"ColumnDataSource"}},"id":"20ad624c-6ac2-4495-bceb-105a7cf149fc","type":"CDSView"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c34358a-492d-46f1-a448-6af4a0219802","type":"ImageRGBA"},{"attributes":{"callback":null,"column_names":["image","x","y","dw","dh"],"data":{"dh":[10],"dw":[10],"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}],"x":[0],"y":[0]}},"id":"b7347719-9166-44c0-918c-a8d7ade12291","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a418f761-0107-4f6b-8adf-e1d4de77d38f","type":"BoxAnnotation"},{"attributes":{},"id":"11de482a-2a7a-47ce-9f80-a70d0b471ca9","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b7347719-9166-44c0-918c-a8d7ade12291","type":"ColumnDataSource"},"glyph":{"id":"3c34358a-492d-46f1-a448-6af4a0219802","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3effb37f-4916-4e8d-a859-840fdb6b428f","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"20ad624c-6ac2-4495-bceb-105a7cf149fc","type":"CDSView"}},"id":"eda6c46f-4625-430e-9dfe-883173cda212","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"6ed42433-549f-4bf4-a6f4-01bc23f441ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"11de482a-2a7a-47ce-9f80-a70d0b471ca9","type":"BasicTicker"}},"id":"c1ffe415-b2a5-419a-90f9-137b02d2da03","type":"Grid"},{"attributes":{"below":[{"id":"4ed9bf06-bb75-4dd6-b4ef-3dab8a3d38a1","type":"LinearAxis"}],"left":[{"id":"56b084d3-6222-4193-8ab8-244bb341e04b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4ed9bf06-bb75-4dd6-b4ef-3dab8a3d38a1","type":"LinearAxis"},{"id":"e3014c57-95b6-4a62-a729-bc260b9528fe","type":"Grid"},{"id":"56b084d3-6222-4193-8ab8-244bb341e04b","type":"LinearAxis"},{"id":"c1ffe415-b2a5-419a-90f9-137b02d2da03","type":"Grid"},{"id":"a418f761-0107-4f6b-8adf-e1d4de77d38f","type":"BoxAnnotation"},{"id":"eda6c46f-4625-430e-9dfe-883173cda212","type":"GlyphRenderer"}],"title":{"id":"6769c8a5-852f-443b-a17f-1f171f411e71","type":"Title"},"toolbar":{"id":"3487e468-8e37-46eb-831f-164bb0e2e7cb","type":"Toolbar"},"x_range":{"id":"4764795b-f2d5-40ae-9ba4-7192718532ed","type":"Range1d"},"x_scale":{"id":"cd21aa63-51a0-4545-b96e-3411c52f4af7","type":"LinearScale"},"y_range":{"id":"a70939b1-4ae0-404c-a2f2-dfcf8a66c784","type":"Range1d"},"y_scale":{"id":"2e3e88f8-d982-4638-b79d-6f0330735ad0","type":"LinearScale"}},"id":"6ed42433-549f-4bf4-a6f4-01bc23f441ec","subtype":"Figure","type":"Plot"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3effb37f-4916-4e8d-a859-840fdb6b428f","type":"ImageRGBA"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7a291060-facf-4e4a-9e39-9944fddc0682","type":"PanTool"},{"id":"6812a51f-a607-492f-9c74-147f30757bc8","type":"WheelZoomTool"},{"id":"01b94a38-3453-4722-b659-bdcfc88be991","type":"BoxZoomTool"},{"id":"903c2bc9-0bf7-4c83-bae7-affdbf0c774a","type":"SaveTool"},{"id":"4b59d996-8c5e-46a2-847c-39ee197d11c6","type":"ResetTool"},{"id":"465b4a1a-27f5-4333-861f-b8cd7c8679a3","type":"HelpTool"}]},"id":"3487e468-8e37-46eb-831f-164bb0e2e7cb","type":"Toolbar"},{"attributes":{"overlay":{"id":"a418f761-0107-4f6b-8adf-e1d4de77d38f","type":"BoxAnnotation"}},"id":"01b94a38-3453-4722-b659-bdcfc88be991","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":10},"id":"4764795b-f2d5-40ae-9ba4-7192718532ed","type":"Range1d"},{"attributes":{},"id":"4751ef2e-3d55-4146-bf02-4c05c3a8ea95","type":"BasicTickFormatter"},{"attributes":{},"id":"903c2bc9-0bf7-4c83-bae7-affdbf0c774a","type":"SaveTool"},{"attributes":{"callback":null,"end":10},"id":"a70939b1-4ae0-404c-a2f2-dfcf8a66c784","type":"Range1d"},{"attributes":{},"id":"465b4a1a-27f5-4333-861f-b8cd7c8679a3","type":"HelpTool"},{"attributes":{},"id":"cd21aa63-51a0-4545-b96e-3411c52f4af7","type":"LinearScale"},{"attributes":{},"id":"2e3e88f8-d982-4638-b79d-6f0330735ad0","type":"LinearScale"},{"attributes":{"formatter":{"id":"4751ef2e-3d55-4146-bf02-4c05c3a8ea95","type":"BasicTickFormatter"},"plot":{"id":"6ed42433-549f-4bf4-a6f4-01bc23f441ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ca585ad-a0f0-4de4-9c21-75960ed4cef0","type":"BasicTicker"}},"id":"4ed9bf06-bb75-4dd6-b4ef-3dab8a3d38a1","type":"LinearAxis"},{"attributes":{"plot":{"id":"6ed42433-549f-4bf4-a6f4-01bc23f441ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ca585ad-a0f0-4de4-9c21-75960ed4cef0","type":"BasicTicker"}},"id":"e3014c57-95b6-4a62-a729-bc260b9528fe","type":"Grid"},{"attributes":{},"id":"8ca585ad-a0f0-4de4-9c21-75960ed4cef0","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"6769c8a5-852f-443b-a17f-1f171f411e71","type":"Title"},{"attributes":{},"id":"6812a51f-a607-492f-9c74-147f30757bc8","type":"WheelZoomTool"},{"attributes":{},"id":"b477eb39-1870-4e6c-a2a1-9edf0db9eebf","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b477eb39-1870-4e6c-a2a1-9edf0db9eebf","type":"BasicTickFormatter"},"plot":{"id":"6ed42433-549f-4bf4-a6f4-01bc23f441ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"11de482a-2a7a-47ce-9f80-a70d0b471ca9","type":"BasicTicker"}},"id":"56b084d3-6222-4193-8ab8-244bb341e04b","type":"LinearAxis"},{"attributes":{},"id":"4b59d996-8c5e-46a2-847c-39ee197d11c6","type":"ResetTool"},{"attributes":{},"id":"7a291060-facf-4e4a-9e39-9944fddc0682","type":"PanTool"}],"root_ids":["6ed42433-549f-4bf4-a6f4-01bc23f441ec"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"f300daa1-2d63-4eec-ae98-bcdab6868a25","elementid":"b9df2a05-84c9-4a2b-b899-dc5f5469de1a","modelid":"6ed42433-549f-4bf4-a6f4-01bc23f441ec"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
