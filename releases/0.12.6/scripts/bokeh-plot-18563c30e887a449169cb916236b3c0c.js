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
      };var element = document.getElementById("a79818a6-f2ad-434f-81bb-aeb45ccad726");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a79818a6-f2ad-434f-81bb-aeb45ccad726' but no matching script tag was found. ")
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
                var docs_json = {"55254750-7af6-4ed7-993b-790f46e11e66":{"roots":{"references":[{"attributes":{"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"}},"id":"8c38d500-f4f0-4628-bdbd-bcc444fb9eea","type":"HelpTool"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ca10828-d24b-4bea-9d6f-ee1ec99f6979","type":"ImageRGBA"},{"attributes":{},"id":"f5052fc5-9496-4262-981a-e11710a87898","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"}},"id":"273b7633-ccbc-4680-b8bc-be97c84b2900","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"},"ticker":{"id":"54e74142-4493-479e-b0b3-022121aaed0a","type":"BasicTicker"}},"id":"f37a07c0-f546-4281-aa06-8cdca0f2c934","type":"Grid"},{"attributes":{"overlay":{"id":"69374689-53fe-463c-a519-a19ad7528e8b","type":"BoxAnnotation"},"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"}},"id":"fd75d50d-3748-4e42-9d1c-838d30a9e456","type":"BoxZoomTool"},{"attributes":{},"id":"775859c6-46ad-48f2-b7d3-0bc754e21751","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"de76700f-fc02-4f69-beba-2fea9c8d1578","type":"Range1d"},{"attributes":{},"id":"7ab1cf46-b48b-4b77-aad7-026c90c2accc","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"cb484ea9-008f-482d-945a-174e35cbde2d","type":"Title"},{"attributes":{},"id":"36ecb275-db11-46fe-959f-b619f40067ff","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"},"ticker":{"id":"775859c6-46ad-48f2-b7d3-0bc754e21751","type":"BasicTicker"}},"id":"a9fb9b47-bb5c-465b-8bda-37f80e3a13ef","type":"Grid"},{"attributes":{"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"}},"id":"0a643f55-abb5-4cc2-afc8-abeeb2ea4af4","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["dw","y","dh","x","image"],"data":{"dh":[10],"dw":[10],"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}],"x":[0],"y":[0]}},"id":"176ee6ff-85ab-4398-a2fe-d5849f105038","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69374689-53fe-463c-a519-a19ad7528e8b","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"f5052fc5-9496-4262-981a-e11710a87898","type":"BasicTickFormatter"},"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"},"ticker":{"id":"775859c6-46ad-48f2-b7d3-0bc754e21751","type":"BasicTicker"}},"id":"b4fb4c9c-dd8a-4f11-9a42-22b79c71afbb","type":"LinearAxis"},{"attributes":{},"id":"fc09714b-b0f2-4d90-89d9-ae03311bb554","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"689c086d-7ed5-43d4-97ac-c3b2f38b6905","type":"PanTool"},{"id":"e2fd1507-f56e-4478-aeb6-dd15a1dcbf1e","type":"WheelZoomTool"},{"id":"fd75d50d-3748-4e42-9d1c-838d30a9e456","type":"BoxZoomTool"},{"id":"273b7633-ccbc-4680-b8bc-be97c84b2900","type":"SaveTool"},{"id":"0a643f55-abb5-4cc2-afc8-abeeb2ea4af4","type":"ResetTool"},{"id":"8c38d500-f4f0-4628-bdbd-bcc444fb9eea","type":"HelpTool"}]},"id":"fb8f234a-b12f-42a6-9d82-84eb278c9612","type":"Toolbar"},{"attributes":{"below":[{"id":"b4fb4c9c-dd8a-4f11-9a42-22b79c71afbb","type":"LinearAxis"}],"left":[{"id":"d256b0ea-a4fa-4bbd-ac63-6504b2e0cf4a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b4fb4c9c-dd8a-4f11-9a42-22b79c71afbb","type":"LinearAxis"},{"id":"a9fb9b47-bb5c-465b-8bda-37f80e3a13ef","type":"Grid"},{"id":"d256b0ea-a4fa-4bbd-ac63-6504b2e0cf4a","type":"LinearAxis"},{"id":"f37a07c0-f546-4281-aa06-8cdca0f2c934","type":"Grid"},{"id":"69374689-53fe-463c-a519-a19ad7528e8b","type":"BoxAnnotation"},{"id":"b1731aa1-9280-4455-8c8e-20cae8b37f03","type":"GlyphRenderer"}],"title":{"id":"cb484ea9-008f-482d-945a-174e35cbde2d","type":"Title"},"tool_events":{"id":"73df97b1-2042-4356-b442-fb50aee07d98","type":"ToolEvents"},"toolbar":{"id":"fb8f234a-b12f-42a6-9d82-84eb278c9612","type":"Toolbar"},"x_range":{"id":"de76700f-fc02-4f69-beba-2fea9c8d1578","type":"Range1d"},"x_scale":{"id":"fc09714b-b0f2-4d90-89d9-ae03311bb554","type":"LinearScale"},"y_range":{"id":"fa565793-a34f-4a02-8517-25c12a18a90e","type":"Range1d"},"y_scale":{"id":"7ab1cf46-b48b-4b77-aad7-026c90c2accc","type":"LinearScale"}},"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"}},"id":"e2fd1507-f56e-4478-aeb6-dd15a1dcbf1e","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":10},"id":"fa565793-a34f-4a02-8517-25c12a18a90e","type":"Range1d"},{"attributes":{"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"}},"id":"689c086d-7ed5-43d4-97ac-c3b2f38b6905","type":"PanTool"},{"attributes":{"formatter":{"id":"36ecb275-db11-46fe-959f-b619f40067ff","type":"BasicTickFormatter"},"plot":{"id":"1ca09305-0c6e-4308-bad8-97158022af8a","subtype":"Figure","type":"Plot"},"ticker":{"id":"54e74142-4493-479e-b0b3-022121aaed0a","type":"BasicTicker"}},"id":"d256b0ea-a4fa-4bbd-ac63-6504b2e0cf4a","type":"LinearAxis"},{"attributes":{},"id":"73df97b1-2042-4356-b442-fb50aee07d98","type":"ToolEvents"},{"attributes":{"data_source":{"id":"176ee6ff-85ab-4398-a2fe-d5849f105038","type":"ColumnDataSource"},"glyph":{"id":"1ca10828-d24b-4bea-9d6f-ee1ec99f6979","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"182b5e41-36fd-4461-a78f-fc3a92dab467","type":"ImageRGBA"},"selection_glyph":null},"id":"b1731aa1-9280-4455-8c8e-20cae8b37f03","type":"GlyphRenderer"},{"attributes":{},"id":"54e74142-4493-479e-b0b3-022121aaed0a","type":"BasicTicker"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"182b5e41-36fd-4461-a78f-fc3a92dab467","type":"ImageRGBA"}],"root_ids":["1ca09305-0c6e-4308-bad8-97158022af8a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"55254750-7af6-4ed7-993b-790f46e11e66","elementid":"a79818a6-f2ad-434f-81bb-aeb45ccad726","modelid":"1ca09305-0c6e-4308-bad8-97158022af8a"}];
                
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
